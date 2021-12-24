const express = require('express');
const hbs = require('express-handlebars');
const home = require('./controllers/home');
const catalog = require('./controllers/catalog');
const about = require('./controllers/about');
const storage = require('./util/storage');

async function start() {
  const app = express();
  const port = 5000;

  app.use('/static', express.static('static'));

  app.engine(
    '.hbs',
    hbs.engine({
      extname: '.hbs',
    })
  );

  app.set('view engine', '.hbs');

  app.use(await storage());

  app.use('/catalog', catalog);
  app.use('/about', about);
  app.get('/', home);

  app.listen(port, () => console.log('Server listening on port' + port));
}

start();