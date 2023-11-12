const express = require('express')

const filmController = require("../controllers/film.controller");
const filmRouter = express.Router();


filmRouter.get('/:title', async function (req, res) {
    let titulo = req.params.title;
    let film = await filmController.getFilm(titulo);
    if (film == "error") {
       res.status(404).json({message: "Not found"}) 
    } else {
        res.render('Pelicula', {Title: film.Title, autor: film.Writer, descripcion: film.Plot, url: film.Poster});
    }
})

filmRouter.post('/:title', async function(req, res){
    let titulo = req.params.title;
    let film = await filmController.getFilm(titulo);
    if (film == "error") {
       res.status(404).json({message: "Not found"}) 
    } else {
        res.render('Pelicula', {Title: film.Title, autor: film.Writer, descripcion: film.Plot, url: film.Poster});
    }
});


module.exports = filmRouter;