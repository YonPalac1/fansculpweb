const express = require('express');
const app = express();
const path = require('path');

/*  Enrutadores  */
// Con los enrutadores manejaremos las vistas y los endpoints de apis
let indexRouter = require('./routes/index.js');

/*  Middleware  */
// los midlewares actuan entre el request (solicitud del cliente/front) y la respuesta del servidor, validando usuarios/roles/sesiones/cookies/imagenes etc

// Vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/*  Rutas  */
// links ej: /contacto /login
app.use('/', indexRouter);


// 
app.listen(3000, ()=>{
    console.log("servidor corriendo en localhost:3000")
})