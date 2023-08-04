var sequelize = require('sequelize')
var empleadoModelo = require('./models/empleado')

//conexion con la BD
const conexion = new sequelize('sql9636926','sql9636926','rBQLI5xQ9v',{ //nombre de la BD es (aplicacionejs), aqui deben tener la BD hecha en MYSQL
    host: 'sql9.freemysqlhosting.net',
    port: '3306',
    dialect: 'mysql'
});

const empleado = empleadoModelo(conexion);

conexion.sync({force:false})
.then(() => {
    console.log('Conectado exitosamente a la BD')
})

.catch((e) => {
    console.log('Error al conectarse: '+e);
});

module.exports = {
    empleado 
}