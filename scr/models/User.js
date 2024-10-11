const { Schema, model } = require('mongoose');


//TODO add/change properties depending on your needs 


const userSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    }
}, {
    collation: {
        locale:'us',
        strength: 2
    }
});

const User=model('User', userSchema)

module.exports = { User }