
const User = require('../models/User');
const { hash, compare} = require('bcrypt');

async function register(username, name, password) { 
    const existing = await(getUserByUsername(username)); 
    if(existing) {
        throw new Error('Username is taken');    
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        username,
        name,
        hashedPassword
    });
    
    await user.save();

    return user;
}


async function login(username, password) {  
    const user = await getUserByUsername(username); 

    if(!user) {
        throw new Error('Wrong username or password');
    }
    const passwordMatch = await compare(password, user.hashedPassword);

    if(!passwordMatch) {
        throw new Error('Wrong username or password');
    }

    return user;
}

async function getUserByUsername(username) { 
    return await User.findOne({ username : new RegExp (`^${username}$`, 'i')}); 
}

module.exports = {
    login,
    register
}