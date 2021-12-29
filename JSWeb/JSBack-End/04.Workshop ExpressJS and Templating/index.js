const express = require('express');
const handlebars = require('express-handlebars');

const { index } = require('./controllers/index');
const { about } = require('./controllers/about');
const {details} = require('./controllers/details');
const {create, post} = require('./controllers/create');
const { notFound } = require('./controllers/notFound');

const app = express();
app.use('/static', express.static('static'));

app.engine('.hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

const port = 5000;

app.get('/', index);
app.get('/about', about);
app.get('/details/:id', details);
app.get('/create', create);
app.post('/create', post);

app.all('*', notFound);

app.listen(port, () => console.log('Server listens on port ' + port));