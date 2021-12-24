const router = require('express').Router();

router.get('/', (res, req) => {
    req.render('about');
});

module.exports = router;