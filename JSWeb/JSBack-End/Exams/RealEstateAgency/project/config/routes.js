const authController = require('../controllers/auth');
const homeController = require('../controllers/home'); 
const housingController = require('../controllers/housing'); 

module.exports = (app) => {
    app.use(homeController);
    app.use(authController);
    app.use(housingController);
    app.all('*', (req, res) => {
       res.render('404', { title : 'Not Found Page'}); 
    });
}