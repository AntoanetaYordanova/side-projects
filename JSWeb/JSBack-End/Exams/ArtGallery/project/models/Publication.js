const { Schema, model } = require('mongoose');

const IMAGE_PATTERN = /^https?:\/\//;
const YES_NO_PATTERN = new RegExp('(^(Yes)?(No)?$)');

const publicationSchema = new Schema ({
    title : {
        type : String,
        minlength : [6, 'Title must be at least 6 characters long']
    },
    technique : {
        type : String,
        required : [ true , 'Painting technique is required'],
        maxlength : [15, 'Painting technique must be maximum 15 characters long']
    },
    picture : {
        type : String,
        validate : {
            validator(value) {
                return IMAGE_PATTERN.test(value);
            },
            message : 'Please enter a valind image URL'
        }
    },
    certificate : {
        type : String,
        required : [true, 'Please enter Yes or No in the certificate field'],
       validate : {
           validator(value) {
               return YES_NO_PATTERN.test(value);
           },
           message : 'Please enter Yes or No in the certificate field'
       }
    },
    author : {
        type : Schema.Types.ObjectId,
        required : true
    },
    usersShared : {
        type : [ Schema.Types.ObjectId ],
        default : []
    }
});

module.exports = new model('Publication', publicationSchema);
