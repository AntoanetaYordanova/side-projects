const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('.hbs', hbs.engine({
    extname : '.hbs'    
}));

app.set('view engine', '.hbs');

app.listen(port, () => console.log('Server listening on port' + port));