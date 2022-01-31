const main = require('../controllers/main');
const { get: createGet, post : createPost} = require('../controllers/create');
const about = require('../controllers/about');
const { notFound } = require('../controllers/notFound');
const { details } = require('../controllers/details');
const {edit, post : editPost} = require('../controllers/edit');
const deleteCube = require('../controllers/delete');
const {post : comment} = require('../controllers/comment');

module.exports = (app) => {
    app.get('/', main);

    app.get('/create', createGet);
    app.post('/create', createPost);

    app.get('/about', about);

    app.get('/details/:id', details);

    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.get('/delete/:id', deleteCube);

    app.post('/comment/:id', comment);

    app.all('*', notFound);
}