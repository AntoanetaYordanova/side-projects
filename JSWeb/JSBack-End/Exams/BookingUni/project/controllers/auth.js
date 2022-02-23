const router = require('express').Router();
const { isUser, isGuest } = require('../middlewares/guards');
const {register, login} = require('../services/user');
const mapErrors = require('../utils/mappers');

router.get('/register', isGuest(), (req, res) => {
   res.render('register'); 
});


//TODO: Check form action, method, field names
router.post('/register', isGuest() ,async (req, res) => {
    try {
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }
        const user = await register(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/') //TODO: Check redirect requirements
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        //TODO: To change data according to requirements
        res.render('register',{ data : { email : req.body.email }, errors});
    }
})

router.get('/login', isGuest(),(req, res) => {
    res.render('login');
});

//TODO: Check form action, method, field names
router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/'); //TODO: Check redirect requirements
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        //TODO: To change data according to requirements
        res.render('login', { data : { email : req.body.email }, errors});
    }
});

router.get('/logout', isUser(),(req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;