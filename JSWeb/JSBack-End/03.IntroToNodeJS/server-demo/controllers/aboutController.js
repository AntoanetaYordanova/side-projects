const aboutPage = `
<html>
    <head>
        <title>About</title>
    </head>
    <body>
        <h1>About</h1>
        <p>About our page</p>
    </body>
</html>`;

module.exports = (req, res) => {
    res.write(aboutPage);
    res.end();
}