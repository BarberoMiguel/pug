const express = require('express')

const weatherController = require("../controllers/weather.controller");
const weatherRouter = express.Router();
const bodyParser = require('body-parser');

weatherRouter.use(bodyParser.urlencoded({ extended: true }));

weatherRouter.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
})

weatherRouter.post('/', async function(req, res){
    let city = req.body.city;
    let weathertext = await weatherController.getWeather(city);
    if (weathertext == "error" || weathertext == undefined) {
        res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
        res.render('index', {weathertext: weather, error: null});
    }
});


module.exports = weatherRouter;