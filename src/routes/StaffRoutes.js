const express = require('express');  //Inicializar un servidor web HTTP o HTTPS. 
const router = express.Router(); //Obtener de express el módulo de rutas (router).
const StaffController = require('../controllers/StaffController');

//Crear una un miembro del personal.
router.post('/createStaff', StaffController.createStaff);
//Obtener todos los miembro del personales.
router.post('/findStaff', StaffController.findStaff);
//Obtener un miembro del personal por ID.
router.post('/findStaff/:id', StaffController.findStaffID);
//Actualizar un miembro del personal por ID.
router.post('/updateStaff/:id', StaffController.updateStaffID);
//Eliminar un miembro del personal por ID.
router.post('/deleteStaff/:id', StaffController.deleteStaffID);

module.exports = router; //Todo lo contendrá el router.