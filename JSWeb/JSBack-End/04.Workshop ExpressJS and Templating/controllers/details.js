module.exports = {
    details:  async(req,res) => {
        const cubeId = req.params.id;

        res.render('details', {
            title : 'Details'
        });
    }
}