const Comment = require('../models/Comment');
const Cube = require('../models/Cube');

const init = () => {
    return (req, res, next) => {
        req.storage = {
            getAllCubes,
            createCube
        };
        next();
    }
}

async function getAllCubes() {
    return await Cube.find({}); 
}

async function createCube(cube) {
    const newCube = new Cube(cube);
    await newCube.save();
}

module.exports = {
    init, 
    createCube,
    getAllCubes
};