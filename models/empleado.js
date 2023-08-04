// Cambiamos el ProductoSchema por EmpleadoSchema

var sequelize = require('sequelize')

module.exports = (conexion) => {
    const EmpleadoSchema = conexion.define('empleado',{ 
        id:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true                     
        },
        nombre: {
            type: sequelize.STRING
        },
        ocupacion: {
            type: sequelize.STRING
        },
        telefono: {
            type: sequelize.STRING
        },
        direccion: { 
            type: sequelize.STRING 
        }, 
        sueldo:{
            type: sequelize.DOUBLE
        }
    });
    return EmpleadoSchema;
}