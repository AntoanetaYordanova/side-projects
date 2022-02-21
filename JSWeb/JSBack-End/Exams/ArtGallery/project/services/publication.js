const Publication = require('../models/Publication');
const User = require('../models/User');

async function getAllPublications() {
    return Publication.find({}).lean();
}

async function createPublication(data, userId) {
    const user = await User.findById(userId);
    const newPublication = new Publication(data);
    user.publications.push(newPublication);

    await newPublication.save();
    await user.save();
}

async function getPublicationById(id) {
    return Publication.findById(id).lean();
}

async function getUserPublications(id) {
    return await Publication.find({ usersShared : id}).lean();
}

async function updatePublication(id, data) {
    const publication = await Publication.findById(id);

    publication.title = data.title;
    publication.technique = data.technique;
    publication.picture = data.picture;
    publication.certificate = data.certificate;

    await publication.save();
}

async function deletePublication(id) {
    await Publication.findByIdAndRemove(id);
}

async function sharePublication(userId, publicationId) {
    const publication = await Publication.findById(publicationId);

    publication.usersShared.push(userId);

    await publication.save();
}

module.exports = {
    getAllPublications,
    createPublication,
    getPublicationById,
    updatePublication,
    deletePublication,
    sharePublication,
    getUserPublications
}