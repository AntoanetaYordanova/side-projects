const URL_PATTERN = /^https?:\/\//;

const { Schema, model, SchemaTypes } = require('mongoose');

const housingSchema = new Schema({
    name : {
        type : String,
        minlength : [ 6, 'Name must be at least 6 characters long'] 
    },
    type : {
        type : String,
        required : [ true, 'Ptoperty type is required']
    },
    year : {
        type : Number,
        min : [1850, 'Year must be between 1850 and 2021'],
        max : [2021, 'Year must be between 1850 and 2021']
    },
    city : {
        type : String,
        minlength : [4, 'City must be at least 4 characters long']
    },
    image : {
        type : String,
        validate : {
            validator(value) {
                return URL_PATTERN.test(value);
            }, 
            message : 'Please enter a valid image URL'
        }
    },
    description : {
        type : String,
        required : [ true, 'Description is required'],
        maxlength : [ 60, 'Description must be maximum 60 characters long']
    },
    available : {
        type : Number,
        min : [ 0 , 'Available pieces must be a number between 0 and 10']
    },
    rented : {
        type : [ SchemaTypes.ObjectId ],
        default : [],
        ref : 'User'
    },
    owner : {
        type : SchemaTypes.ObjectId,
        required : true,
        ref : 'User'
    }
});

module.exports = new model('Housing', housingSchema);