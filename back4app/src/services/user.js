import Parse from 'parse/dist/parse.min.js';

async function create (username, password) {
    try {
        const createdUser = await Parse.User.signUp(username, password);
        return createdUser;
    } catch (err) {
        return err;
    }   
}

async function getCurrentUser() {
    const currentUser = await Parse.User.current();
    return currentUser;
}

export {
    create,
    getCurrentUser
}