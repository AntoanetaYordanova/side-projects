const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author : { type : String, required : true },
    content : { type : String, required : true, maxlength : 200},
});

module.exports = mongoose.model('Comment', schema);
