const fetchFilm = require('../utils/fetchFilms');

//READ
// READ
const getFilm = async function(title) {
    try {
        let film = await fetchFilm.getFilm(title);
        if (film == undefined || film.Error) {
            return "error"
        } else {
            return film
        } 
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return "error";
    }
}

module.exports ={
    getFilm
}