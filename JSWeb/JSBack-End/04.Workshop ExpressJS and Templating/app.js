start();

async function start() {
  const express = require('express');

  const { init: storage } = require('./services/storage');

  const expressConfig = require('./config/express');
  const databaseConfig = require('./config/database');
  const routing = require('./config/routes');

  const port = 5000;

  const app = express();
  await databaseConfig();

  app.use(storage());

  expressConfig(app);
  routing(app);

  app.listen(port, () => console.log('Server listening on port ' + port));
}
