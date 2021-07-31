const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const requests = require('requests');
const port = 8000;

//console.log(path.join(__dirname, '../public'));

const staticPath =  path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPaths = path.join(__dirname, '../templates/partials');



// to set the view enginge
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPaths)

app.use(express.static(staticPath));



// template engine route
app.get("/", (req, res) => {
    res.render('index', {
        channelName: 'Manish',
    });
});

app.get('/aboutus', (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=cecd09cd82c7bc567907b3102d9e105d`)
      .on("data",  (chunk) => {
        const objdata = JSON.parse(chunk); 
        const arrData = [objdata] ;
        console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        
            res.write(arrData[0].name);
            //console.log(realTimeData);
        })
      .on("end",  (err) =>{
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
});

app.get('/aboutus/*', (req, res) => {
    res.render('404', {
        errorcomment: 'Oopps this aboutus  page couldn"t be found'
    });
});


app.get('*', (req, res) => {
    res.render('404', {
        errorcomment: 'Oopps page couldn"t be found, click here to go back'
    });
});


app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});