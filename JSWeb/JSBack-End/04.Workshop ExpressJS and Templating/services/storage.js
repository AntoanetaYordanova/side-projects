const Comment = require('../models/Comment');
const Cube = require('../models/Cube');

const init = () => {
  return (req, res, next) => {
    req.storage = {
      getAllCubes,
      createCube,
      findById,
    };
    next();
  };
};

async function findById(id) {
  return Cube.findById(id);
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

module.exports = {
  init,
  createCube,
  getAllCubes,
};
