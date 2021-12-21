const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs.engine({
    extname : '.hbs'    
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    const employees = {
        title : 'Home page',
        employees : [
        {
            name : 'Peter',
            age : 23
        },
        {
            name : 'Toni',
            age : 24
        },
        {
            name : 'Andi',
            age : 25
        }
    ]}
    res.render('home', employees);
});


app.listen(3000);