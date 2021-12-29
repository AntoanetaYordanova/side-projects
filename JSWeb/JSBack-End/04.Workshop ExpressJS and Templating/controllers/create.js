module.exports = {
    create(req, res) {
        res.render('create');
    },
    post(req, res) {
        res.redirect('/');
    }
}