const { isUser, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const { createPublication, getPublicationById, updatePublication, deletePublication, sharePublication } = require('../services/publication');
const mapErrors = require('../utils/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title : 'Create Page'});
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;

    const data = {
        title : req.body.title,
        technique : req.body.technique,
        picture : req.body.picture,
        certificate : req.body.certificate,
        author : userId
    }

    try {
        await createPublication(data, userId);

        res.redirect('/gallery');
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        res.render('create', { title : 'Create Page', data, errors});
    }

});

router.get('/details/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const data = await getPublicationById(id);
    let userData = {};

    if(data.usersShared.some(u => u == req.session.user._id)) {
        userData.hasShared = true;
    }

    if(req.session.user._id == data.author) {
        userData.isOwner = true;
    }
    res.render('details', { title : 'Details Page', data , userData});
});

router.get('/edit/:id', preload(), isOwner(), async (req, res) => {
    const data = res.locals.data;

    res.render('edit', { title : 'Edit Page', data});
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;
    const data = {
        title : req.body.title,
        technique : req.body.technique,
        picture : req.body.picture,
        certificate : req.body.certificate,
    }

    try {
        await updatePublication(id , data);

        res.redirect('/details/' + id);
    } catch (err) {
        data._id = id;
        console.log(err);
        const errors = mapErrors(err);
        res.render('edit', { title : 'Edit Page', data, errors});
    }
});

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id
    await deletePublication(id);
    res.redirect('/gallery');
});

router.get('/share/:id', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const publicationId = req.params.id;

    await sharePublication(userId, publicationId);

    res.redirect('/');
});


module.exports = router;
