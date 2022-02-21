const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const publicationsController = require('../controllers/publications')

module.exports = (app) => {
    app.use(homeController);
    app.use(authController);
    app.use(publicationsController);
    app.all('*', (req, res) => {
        res.render('404');
    });
}