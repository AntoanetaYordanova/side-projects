const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : { type : String, required : true },
    description : { type : String, required : true, maxlength : 200},
    imageUrl : { type : String, required : true, match : /^https?/},
    difficulty : { type : Number, required : true, min : 1, max : 6 },
});

module.exports = mongoose.model('Accessory', schema);