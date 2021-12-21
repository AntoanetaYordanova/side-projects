const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/catalog', (req, res) => {
    res.send('Catalog page');
});

app.post('/catalog', (req, res) => {
    res.send('Article created');
});

app.listen(3000, () => console.log('Server listening on port 3000'));