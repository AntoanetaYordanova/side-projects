const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : { type : String, required : true },
    description : { type : String, required : true, maxlength : 500},
    imageUrl : { type : String, required : true, match : /^https?/},
    difficulty : { type : Number, required : true, min : 1, max : 6 },
    accessoaries : [{type : mongoose.Schema.Types.ObjectId, ref : 'Accessory'}],
    comments : [ {type : mongoose.Schema.Types.ObjectId, ref : 'Comment'}]
});

module.exports = mongoose.model('Cube', schema);
