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
    return Object.values(data);
}

function getById(id) {
    return data[id];
}

module.exports = init;