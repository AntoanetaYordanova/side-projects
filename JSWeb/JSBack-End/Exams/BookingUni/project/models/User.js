
const { Schema, model, SchemaTypes } = require('mongoose');

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique
    },
    hashedPassword : {
        type : String,
        required : true
    },
    bookedHotels : {
        type : [SchemaTypes.ObjectId],
        ref : 'Hotel',
        default : []
    },
    offeredHotels : {
        type : [SchemaTypes.ObjectId],
        ref : 'Hotel',
        default : []
    }
});

userSchema.index({email : 1}, {
    unique : true,
    collation : {
        locale : 'en',
        strength : 2
    }
});

module.exports = new model('User', userSchema);