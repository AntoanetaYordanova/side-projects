const { isUser } = require('../middlewares/guards');
const { getAllPublications, getUserPublications } = require('../services/publication');
const { getUserById } = require('../services/user');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const data = await getAllPublications();
    let availablePubs;

    if(data.length > 0) {
        availablePubs = true;
    }

    data.forEach(d => d.timesShared = d.usersShared.length);

    res.render('home', { title : 'Home Page', data, availablePubs });
});

router.get('/gallery', async (req, res) => {
    const data = await getAllPublications();
    let hasData;

    if(data.length > 0) {
        hasData = true;
    }
    res.render('gallery', { title : 'Gallery Page', hasData, data });
});

router.get('/profile', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const user = await getUserById(userId);
    const sharedPubs = await getUserPublications(userId);

    console.log(user);
    console.log(sharedPubs);
    res.render('profile', { title : 'Profile Page'});
});

module.exports = router;