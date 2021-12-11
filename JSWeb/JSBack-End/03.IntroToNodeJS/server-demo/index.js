const http = require('http');
const aboutController = require('./controllers/aboutController');
const homeController = require('./controllers/homeController');
const router = require('./router');

const server = http.createServer(requestHandler);
const port = 3000;

router.registerHandler('/', homeController);
router.registerHandler('/about', aboutController);

function requestHandler(req, res) {
    console.log('>>>', req.method, req.url);
    const handler = router.match(req.url);
    handler(req, res);
}

server.listen(port, () => console.log('Server listening on port ' + port));