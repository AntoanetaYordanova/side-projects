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
    name: String,
    color: String,
  });

  const Cat = mongoose.model('Cat', catSchema);

  const personSchema = new mongoose.Schema({
    firstName: { type: String, required : true},
    lastName: { type: String, required : true},
    age: { type: Number, required : true},
  });

  personSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
  });

  personSchema.methods.sayHi = function () {
    console.log(`I am ${this.firstName} and I am ${this.age} years old`);
  };

  const Person = mongoose.model('Person', personSchema);

  const person1 = new Person({
    firstName: 'Peter',
    lastName: 'Johnson',
    age: 23,
  });

  const person2 = new Person({
    firstName: 'Tony',
    lastName: 'Yordanova',
    age: 31,
  });

//   await person1.save();
//   await person2.save();

  const data = await Person.find({});

//   data.forEach((p) => p.sayHi());

  data.map(p => p.fullName).forEach(n => console.log(n));

//   console.log(data);
}
