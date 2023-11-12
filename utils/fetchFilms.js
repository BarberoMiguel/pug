const request = require('request');
require('dotenv').config();
const apiKey = process.env.API_Key;

const getFilm = (titulo) => {
    let url = `http://www.omdbapi.com/?t=${titulo}&apikey=${apiKey}`
    return fetch(url).then(res => res.json())
}




module.exports = {
    getFilm,
    //postProduct,
    //putProduct,
    //deleteProduct
}