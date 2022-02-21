const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username : {
        type : String,
        minlength : [4, 'Username must be at least 4 characters long']
    },
    hashedPassword : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : [true, 'Address is required'],
        maxlength : [20, 'Address must be maximum 20 characters long'] 
    },
    publications : {
        type : [ Schema.Types.ObjectId ],
        default : []
    }
});

userSchema.index({username : 1}, {
    unique : true,
    collation : {
        locale : 'en',
        strength : 2
    }
});

module.exports = new model('User', userSchema);