import Parse from 'parse/dist/parse.min.js';

const create = async (content, ownerId) => {

    const Post = new Parse.Object('Test');
    Post.set('content', content);
    Post.set('ownerid', ownerId);
    await Post.save();
}

const findByOwnerId = async (id) => {
    const Test = new Parse.Query('Test');
    Test.contains('ownerid', id);
    return Test.find();
}

const findById = async (id) => {
    const Test = new Parse.Query('Test');
    Test.contains('objectId', id);
    const result = await Test.find();
    console.log(result);
}

export {
    create,
    findByOwnerId,
    findById
}