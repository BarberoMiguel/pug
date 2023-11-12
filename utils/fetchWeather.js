const request = require('request');
require('dotenv').config();

let apiKey = process.env.API_Key;

const getWeather = (city) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    request(url, function (err, response, body) {
    if(err){
        return "error";
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        return message;
    }
    });
}




module.exports = {
    getWeather,
    //postProduct,
    //putProduct,
    //deleteProduct
}