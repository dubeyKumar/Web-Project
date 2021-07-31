const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

//console.log(__dirname);

//console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send('welcome to the home page');
});
app.get('/about', (req, res) => {
    res.status(200).send("welcome to the About page");
});
app.get('/contact', (req, res) => {
    res.send("welcome to the Contact page");
});

app.listen(port, () => {
    console.log(`listening to the port number ${port}`);
});