const express = require('express')
const app = express()
const port = 3000


//middelwares
//const checkApiKey = require('./middlewares/auth_api_key')
const morgan = require('./middlewares/morgan')

// Logger
app.use(morgan(':method :host :status - :response-time ms :body'));


//rutas
const filmRoutes = require('./routes/film')


app.use(express.json()); // Habilito recepción de JSON en servidor

//Config motor plantilla pug
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');
// app.set('view engine', 'ejs')


//Ruta de Template

app.get('/', (req, res) => {
  res.render('home');
})

app.use('/film', filmRoutes)



//para rutas no existentes
app.get('*', function(req, res) {
  res.status(404).json({message: "Not found"})
})



app.listen(3000, function () {
  console.log(`Example app listening on port http://localhost:${port} !`)
})

//para hacer algo en thunderclient tiene que estar iniciado el server
