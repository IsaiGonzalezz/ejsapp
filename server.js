var express = require('express')
var empleado = require('./routes/empleado-routes') //nombre del archivo de rutas "producto-routes"

var app = express()

//definimos el motor de vistas
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use('/',empleado)

var port = process.env.port || 3000
app.listen(port,() => {
    console.log('Servidor iniciado en el puerto '+port)
})