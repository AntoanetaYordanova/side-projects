const { isUser, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const {
  addHouse,
  getHouseById,
  updateHouse,
  deleteHouse,
  rentHouse,
} = require('../services/housing');
const mapErrors = require('../utils/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
  res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const data = {
    name: req.body.name,
    type: req.body.type,
    year: req.body.year,
    city: req.body.city,
    image: req.body.image,
    description: req.body.description,
    available: req.body.available,
    owner: userId,
  };

  try {
    if (req.body.available == '') {
      throw new Error('Available pieces is required');
    }

    if (req.body.year == '') {
      throw new Error('Year must be between 1850 and 2021');
    }
    await addHouse(data);

    res.redirect('/catalog');
  } catch (err) {
    console.log(err);
    const errors = mapErrors(err);
    res.render('create', { title: 'Create Page', data, errors });
  }
});

router.get('/details/:id', async (req, res) => {
  const houseId = req.params.id;
  const userId = req.session.user && req.session.user._id;

  try {
    const data = await getHouseById(houseId);
    let userInfo = {};
    let tenantsUnfo = {};
    let isFree = false;

    if (data.owner._id == userId) {
      userInfo.isOwner = true;
    }

    if (data.rented.some((u) => u._id == userId)) {
      userInfo.hasRented = true;
    }

    if (data.rented.length > 0) {
      tenantsUnfo.hasTenants = true;
      tenantsUnfo.tenants = data.rented.map((t) => t.name).join(', ');
    }

    if (data.available > 0) {
      isFree = true;
    }

    res.render('details', {
      title: 'Details Page',
      data,
      userInfo,
      tenantsUnfo,
      isFree,
    });
  } catch (err) {
    res.render('404', { title: 'Not Found Page' });
  }
});

router.get('/edit/:id', preload(), isOwner(), (req, res) => {
  res.render('edit', { title: 'Edit Page' });
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    type: req.body.type,
    year: req.body.year,
    city: req.body.city,
    image: req.body.image,
    description: req.body.description,
    available: req.body.available,
  };
  try {
    await updateHouse(id, data);

    res.redirect('/details/' + id);
  } catch (err) {
    data._id = id;
    console.log(err);
    const errors = mapErrors(err);
    res.render('edit', { title: 'Edit Page', data, errors });
  }
});

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
  const id = req.params.id;
  await deleteHouse(id);
  res.redirect('/catalog');
});

router.get('/rent/:id', isUser(), async (req, res) => {
  const houseId = req.params.id;
  const userId = req.session.user._id;

  try {
    await rentHouse(houseId, userId);
    res.redirect('/details/' + houseId);
  } catch (err) {
    console.log(err);
    if (err.message == 'Already rented') {
      res.redirect('/details/' + houseId);
    } else {
      res.render('404', { title: 'Not Found Page' });
    }
  }
});

module.exports = router;
