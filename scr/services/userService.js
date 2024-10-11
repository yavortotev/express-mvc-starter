const { User } = require('../models/User');
const bcrypt = require('bcrypt');

//TODO set identity prop name based on description 
const identityName= 'email'

async function register(identity,password) {

    const  existing = await User.find({ [identityName]:identity });

    if(existing){
        throw new Error(`This  ${identityName} is already exists`)
    }
    
    const user = new User ({
        [identityName]: identity,
        password: await bcrypt.hash(password, 10)
    });

    await user.save()

    return user
}


async function login(identity,password) {


    const user = await User.findOne({ [identityName]:identity })

    if(!user){
        throw new Error (`Incorrect username or password`)
    }


    const match = await bcrypt.compare(password,user.password)
    
    if(!match){
        throw new Error (`Incorrect username or password`)

    }

    return user
    
}

module.exports = {
    register,
    login
}