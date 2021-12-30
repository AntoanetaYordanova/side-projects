module.exports = {
    catalog :  async(req, res) => {
        const cubes = await req.storage.getAll();
        const ctx = {
            title : 'Catalog',
            cubes
        }
        res.render('catalog', ctx);
    }
}