module.exports = {
    edit : async (req, res) => {
        const cube = await req.storage.findById(req.params.id);

        if(!cube) {
            return res.render('404');
        }
        cube[`select${cube.difficulty}`] = true;

        res.render('edit', { title : 'Edit', cube});
    },
    post : async (req, res) => {
        const newCube = {
            name  : req.body.name,
            description : req.body.description,
            imageUrl : req.body.imageUrl,
            difficulty : Number(req.body.difficulty)
        }
        try {
            req.storage.edit(req.params.id, newCube);
        } catch (err) {
            if(err.name == 'ValidationError') {
                res.render('edit', { title : 'Edit', newCube});
            }
        }

        res.redirect('/');
    }
}