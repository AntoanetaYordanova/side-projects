const { Schema, model } = require('mongoose');

const NAME_PATTERN = /^[a-zA-Z]+ [a-zA-Z]+$/;

const userSchema = new Schema({
    username : {
        type : String,
        minlength : [5, 'Username must be at least 5 characters long']
    },
    name : {
        type : String,
        required : [true, 'Name is required'],
        validate: {
            validator(value) {
                return NAME_PATTERN.test(value);
            }, 
            message : 'Please enter a valid name'
        } 
    },
    hashedPassword : {
        type : String,
        required : true
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