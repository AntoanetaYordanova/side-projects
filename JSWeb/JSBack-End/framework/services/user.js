
const User = require('../models/User');
const { hash, compare} = require('bcrypt');

//TODO: add all required fields 
async function register(username, password) { //change identifier
    const existing = await(getUserByUsername(username)); //change identifier
    if(existing) {
        throw new Error('Username is taken');    
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        username, //change identifier
        hashedPassword
    });
    
    await user.save();

    return user;
}

//TODO: change identifier

async function login(username, password) {  //change identifier
    const user = await getUserByUsername(username); //change identifier

    if(!user) {
        throw new Error('Wrong username or password');
    }
    const passwordMatch = await compare(password, user.hashedPassword);

    if(!passwordMatch) {
        throw new Error('Wrong username or password');
    }

    return user;
}

//TODO: find user by given identifier 
async function getUserByUsername(username) { //change identifier
    return await User.findOne({ username : new RegExp (`^${username}$`, 'i')}); //change identifier
}

module.exports = {
    login,
    register
}