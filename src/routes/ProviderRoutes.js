const express = require('express');  //Inicializar un servidor web HTTP o HTTPS. 
const router = express.Router(); //Obtener de express el módulo de rutas (router).
const ProviderController = require('../controllers/ProviderControler');

//Crear una un Proveedor.
router.post('/createProvider', ProviderController.createProvider);
//Obtener todos los Proveedores.
router.post('/findProvider', ProviderController.findProvider);
//Obtener un Proveedor por ID.
router.post('/findProvider/:id', ProviderController.findProviderID);
//Actualizar una un Proveedor por ID.
router.post('/updateProvider/:id', ProviderController.updateProviderID);
//Eliminar un Proveedor por ID.
router.post('/deleteProvider/:id', ProviderController.deleteProviderID);

module.exports = router; //Todo lo contendrá el router.