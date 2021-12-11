const homePage = `
<html>
    <head>
        <title>Home</title>
    </head>
    <body>
        <h1>My Page</h1>
        <p>Welcome to my page!</p>
    </body>
</html>`;

module.exports = (req, res) => {
  res.write(homePage);
  res.end();
};
