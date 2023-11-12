const fetchWeather = require('../utils/fetchWeather');

//READ
// READ
const getWeather = async (req, res) => {
    try {
        const city = req.params.city;
        let wheather = await fetchWeather.getWeather(city); 
        return wheather;
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return "error";
    }
}

module.exports ={
    getWeather
}