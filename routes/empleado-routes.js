var router = require('express').Router()
var {empleado} = require('../conexion')

//ruta raiz
router.get('/',(req,res) => {
    res.render('pages/index')
})
// ruta para nosotros
router.get('/nosotros',(req,res) => {
    res.render('pages/nosotros')
})

//ruta para abrir la pagina (view) de instertar empleado
router.get('/insertarEmpleado',(req,res) => {
    res.render('pages/insertarEmpleado')
})

//ruta petizu para guardar un empleado nuevo en la BD
router.post('/guardarEmpleado',(req,res) => {
    empleado.create(req.body)
    .then(() => {
        res.redirect('/listarEmpleado')
    })
    .catch((e) => {
        res.status(400).send('Error al guardar el empleado' +e)
    })
})

//ruta para ir a la página que muestra todos los empleados
router.get('/listarEmpleado', (req,res) => {
    empleado.findAll()
    .then((data) => {
        res.render('pages/listarEmpleado', {empleado:data})
    })
    .catch((e) => {
        console.log('Error al obtener la información'+e)
    })
})

//ruta para buscar un empleado por su id
router.get('/buscarEmpleado/:id', (req,res) => {
    empleado.findAll({
        where:{
            id:req.params.id
        }
    })
    .then((data) => {
        console.log(data)
        res.render('pages/modificarEmpleado', {empleado:data})
    })
})

//ruta (petición) que modifica un empleado existente
router.post('/modificarEmpleado', (req,res) => {
    var idempleado = req.body.idempleado;
    const empleadoModificado = {
        nombre: req.body.nombre,
        ocupacion: req.body.ocupacion,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        sueldo: req.body.sueldo
    }

    empleado.update(empleadoModificado, {
        where: {
            id: idempleado
        }
    })
    .then(() => {
        res.redirect('/listarEmpleado')
    })
    .catch((e) => {
        console.log('Error al modificar el empleado: '+e) 
    })

})

//ruta para eliminar un empleado 
router.get('/eliminarEmpleado/:id',(req,res) => {
    empleado.destroy({
        where: {
            id:req.params.id
        } 
    })
    .then(() => {
        res.redirect('/listarEmpleado')
    })
    .catch((e) => {
        res.status(400).send('Error al eliminar el empleado: '+e)
    })
})

module.exports = router;
