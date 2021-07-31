const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.write("<h1> welcome to the home page </h1>");
    res.write("<h1> welcome to the again home page </h1>");
    res.send();
});
app.get('/about', (req, res) => {
    res.status(200).send("welcome to the About page");
});
app.get('/contact', (req, res) => {
    res.send("welcome to the Contact page");
});
// app.get('/temp', (req, res) => {
//     res.send([
//     {
//         id: 1,
//         name: 'Manish',
//     },
//     {
//         id: 1,
//         name: 'Manish',
//     },
//     {
//         id: 1,
//         name: 'Manish',
//     },
//     {
//         id: 1,
//         name: 'Manish',
//     },
// ]);
    
// });

app.get('/temp', (req, res) => {
    res.json([
    {
        id: 1,
        name: 'Manish',
    },
    {
        id: 1,
        name: 'Manish',
    },
    {
        id: 1,
        name: 'Manish',
    },
    {
        id: 1,
        name: 'Manish',
    },
]);
    
});

app.listen(port, () => {
    console.log(`listening to the port number ${port}`);
});