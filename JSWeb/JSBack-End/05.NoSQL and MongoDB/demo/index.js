const mongoose = require('mongoose');

start();

async function start() {
  const connectionStr = 'mongodb://localhost:27017/test';

  const client = mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Database connected');

  const catSchema = new mongoose.Schema({
      name : String,
      color : String
  });

  const Cat = mongoose.model('Cat', catSchema);

  const myCat = new Cat({
      name: 'Garfield',
      color : 'yellow'
  });

  myCat.save();

  const data = await Cat.find({});
  
  console.log(data);
}
