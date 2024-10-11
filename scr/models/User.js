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
});

const User=model('User', userSchema)

module.exports = { User }