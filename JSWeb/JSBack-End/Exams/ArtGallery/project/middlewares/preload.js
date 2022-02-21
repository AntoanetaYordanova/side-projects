//TODO replace with actual service
const { getPublicationById } = require('../services/publication');

function preload() {
    return async function (req, res, next) {
        const id = req.params.id;
        //TODO change property name to match collection
        const data = await getPublicationById(id);
        res.locals.data = data;

        next();
    }
}

module.exports = preload;