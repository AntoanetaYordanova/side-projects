module.exports = {
    details:  async(req,res) => {
        const cubeId = req.params.id;
        const cube = await req.storage.findById(cubeId);
        
        res.render('details', {
            title : 'Details',
            cube
        });
    }
}