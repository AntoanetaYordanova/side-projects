module.exports = {
    post : async (req, res) => {
        const commentData = {
            author : req.body.name,
            content : req.body.content
        }

        await req.storage.postComment(commentData, req.params.id);

        res.redirect('/');
    }
}