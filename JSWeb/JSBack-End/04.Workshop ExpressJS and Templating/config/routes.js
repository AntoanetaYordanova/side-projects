const main = require('../controllers/main');
const { get: createGet, post : createPost} = require('../controllers/create');
const about = require('../controllers/about');
const { notFound } = require('../controllers/notFound');
const { details } = require('../controllers/details');


module.exports = (app) => {
    app.get('/', main);

    app.get('/create', createGet);
    app.post('/create', createPost);

    app.get('/about', about);

    app.get('/details/:id', details);

    app.all('*', notFound);
}