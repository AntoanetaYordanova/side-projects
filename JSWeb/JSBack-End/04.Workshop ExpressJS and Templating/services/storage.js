const Comment = require('../models/Comment');
const Cube = require('../models/Cube');

const init = () => {
  return (req, res, next) => {
    req.storage = {
      getAllCubes,
      createCube,
      findById,
      edit,
      deleteCube,
      postComment
    };
    next();
  };
};

async function findById(id) {
  const cube = await Cube.findById(id);
  if(cube) {
    return cube;
  } else {
    return undefined;
  }
}

async function getAllCubes(searchParams) {
  let options = {};

  if (searchParams.name) {
    options.name = { $regex: searchParams.name, $options: 'i' };
  }

  if (searchParams.from) {
    options.difficulty = { $gte: Number(searchParams.from) };
  }

  if (searchParams.to) {
    options.difficulty = options.difficulty || {};

    options.difficulty['$lte'] = Number(searchParams.to);
  }

  console.log(options);
  return Cube.find(options);
}

async function createCube(cube) {
  const newCube = new Cube(cube);
  await newCube.save();
}

async function edit(id, data) {
  const cube = await Cube.findById(id);

  if(!cube) {
    throw new ReferenceError('No such cube in database!');
  }

  Object.assign(cube, data);
  await cube.save();
}

async function deleteCube(id) {
  await Cube.findByIdAndRemove(id);
}

async function postComment(data, id) {
  const cube = await findById(id);

  const newComment = new Comment(data);

  cube.comments.push(newComment);
  console.log(cube);
  cube.save();
  newComment.save();
}

module.exports = {
  init
};
