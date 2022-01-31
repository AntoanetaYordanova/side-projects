module.exports = async (req, res) => {
    const cubes = await req.storage.getAllCubes(req.query);
    
    res.render('index', {
        title : 'Catalog',
        cubes
    });
}

