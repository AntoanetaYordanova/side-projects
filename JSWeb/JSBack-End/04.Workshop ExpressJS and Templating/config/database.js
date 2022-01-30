const mongoose = require('mongoose');

module.exports = async () => {
  return new Promise((resolve, reject) => {
    const connectionStr = 'mongodb://localhost:27017/cubicleSecond';

    mongoose.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log('Database error:' + err.message);
        reject(err.message);
    });
    db.once('open', () => {
        console.log('Database connected');
        resolve();
    })
  });
};
