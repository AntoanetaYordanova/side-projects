import Parse from 'parse/dist/parse.min.js';

async function create (email, password) {
    try {
        // const createdUser = await Parse.User.signUp(email, password);
        // return createdUser;
        const user = new Parse.User();
        user.set('username', email);
        user.set('password', password);
        const newUser = user.signUp();
        return newUser;
    } catch (err) {
        return err;
    }   
}

async function getCurrentUser() {
    return await Parse.User.current();
}

async function logout() {
    Parse.User.logOut();
}

async function getById(id) {
    const User = new Parse.User();
    const query = new Parse.Query(User);

    return query.get(id);
}

export {
    create,
    getCurrentUser,
    logout,
    getById
}