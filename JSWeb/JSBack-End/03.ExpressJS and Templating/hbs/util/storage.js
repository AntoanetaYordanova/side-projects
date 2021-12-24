const { info } = require('console');
const fs = require('fs/promises');

let data = {};

async function init() {
    data = JSON.parse(await fs.readFile('./data/books.json'));

    return  (req, res, next) => {
        req.storage = {
            getAll,
            getById
        };
        next();
    }
}

function getAll() {
    return Object.entries(data)
    .map(([id, info]) => ({
        id,
        title : info.title,
        author : info.author
    }));
}

function getById(id) {
    return data[id];
}

module.exports = init;