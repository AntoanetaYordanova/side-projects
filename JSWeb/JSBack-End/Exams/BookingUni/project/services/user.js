
const User = require('../models/User');
const { hash, compare} = require('bcrypt');


async function register(email, password) { 
    const existing = await(getUserByUsername(email)); 
    if(existing) {
        throw new Error('Email is taken');    
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        hashedPassword
    });
    
    await user.save();

    return user;
}


async function login(email, password) {  
    const user = await getUserByUsername(email); 

    if(!user) {
        throw new Error('Wrong email or password');
    }
    const passwordMatch = await compare(password, user.hashedPassword);

    if(!passwordMatch) {
        throw new Error('Wrong email or password');
    }

    return user;
}

async function getUserByUsername(email) { 
    return await User.findOne({ email : new RegExp (`^${email}$`, 'i')});
}

module.exports = {
    login,
    register
}