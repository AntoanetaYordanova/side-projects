module.exports = async (req, res) => {
    const cubes = await req.storage.getAllCubes();

    res.render('index', {
        title : 'Catalog',
        cubes
    });
}

