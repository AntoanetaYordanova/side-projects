const { homePageHouses, getAllHouses, searchHouse } = require('../services/housing');
const { isUser } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/',async (req, res) => {
    const data = await homePageHouses();

    res.render('home', { title : 'Home Page', data});
});

router.get('/catalog', async  (req, res) => {
    const data = await getAllHouses();
    let isData = false;

    if(data.length > 0 ) {
        isData = true;
    }

    res.render('catalog', { title : 'Catalog', data, isData });
});

router.get('/search', isUser(), (req, res) => {
   res.render('search', { title : 'Search Page'}); 
});

router.post('/search', isUser(), async (req, res) => {
    const searchString = req.body.search;
    const data = await searchHouse(searchString);
    let isData = false;
    
    if(data.length > 0) {
        isData = true;
    }
    res.render('search', { title : 'Search Page', data, isData, search : true});
});

module.exports = router;
