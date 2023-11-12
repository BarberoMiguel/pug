const express = require('express')
const app = express()
const port = 3000


//middelwares
//const checkApiKey = require('./middlewares/auth_api_key')
const morgan = require('./middlewares/morgan')

// Logger
app.use(morgan(':method :host :status - :response-time ms :body'));


//rutas
const weatherRoute = require('./routes/weather')


app.use(express.json()); // Habilito recepción de JSON en servidor

//Config motor plantilla pug
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');
// app.set('view engine', 'ejs')


//Ruta de Template

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/weather', weatherRoute);


app.get('/home', function(req, res){
  res.render('plantilla', {
    Title: "Home", 
    url:"https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg",
    text: "Bienvenido a nuestra página, puedes conocernos navegando por las diferentes pestañas"
  });
});
app.get('/quienes', function(req, res){
  res.render('plantilla', {
    Title: "Quienes somos", 
    url:"https://yeljomexico.com/wp-content/uploads/2021/05/QUIENES-SOMOS-ICON.jpg",
    text: "Somos una empresa de recursos humanos muy competente que trabaja todos los dias para hacer un futuro mejor"
  });
});
app.get('/donde', function(req, res){
  res.render('plantilla', {
    Title: "Donde estamos", 
    url:"https://cdn.icon-icons.com/icons2/1369/PNG/512/-place_90615.png",
    text: "Estamos en el medio de Madrid, accesibles para todo el mundo tanto en nuestra sede fisica como en nuestra web"
  });
});
app.get('/que', function(req, res){
  res.render('plantilla', {
    Title: "Que hacemos", 
    url:"https://th.bing.com/th/id/R.b0c7ea23161c261f464964f39e864e84?rik=AoY8xVVPTONJ3A&pid=ImgRaw&r=0",
    text: "Trabajamos todos los dias para proveer un servicio de recursos humanos competente y asequible"
  });
});
app.get('/contacto', function(req, res){
  res.render('plantilla', {
    Title: "Contacto", 
    url:"https://media.istockphoto.com/id/1276619045/es/vector/vector-de-icono-de-perfil-de-usuario.jpg?s=612x612&w=is&k=20&c=UV1q4fvH0jT04e2oqIh04zcSXZdP7hW8JqgNehp9CJg=",
    text: "Contacta con nosotros a través de nuestro correo humanresources@gmail.com"
  });
});


//para rutas no existentes
app.get('*', function(req, res) {
  res.status(404).json({message: "Not found"})
})



app.listen(3000, function () {
  console.log(`Example app listening on port http://localhost:${port} !`)
})

//para hacer algo en thunderclient tiene que estar iniciado el server
