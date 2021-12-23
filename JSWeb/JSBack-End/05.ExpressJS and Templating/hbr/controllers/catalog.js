const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.storage.getAll())
    res.render('catalog');
});

module.exports = router;