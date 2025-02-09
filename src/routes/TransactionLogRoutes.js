const express = require('express');  //Inicializar un servidor web HTTP o HTTPS. 
const router = express.Router(); //Obtener de express el módulo de rutas (router).
const TransactionLogController = require('../controllers/TransactionLogController');

//Crear una un miembro del personal.
router.post('/createTransactionLog', TransactionLogController.createTransactionLog);
//Obtener todos los miembros del personal.
router.post('/findTransactionLog', TransactionLogController.findTransactionLog);
//Obtener un miembro del personal por ID.
router.post('/findTransactionLog/:id', TransactionLogController.findTransactionLogID);
//Actualizar un miembro del personal por ID.
router.post('/updateTransactionLog/:id', TransactionLogController.updateTransactionLogID);
//Eliminar un miembro del personal por ID.
router.post('/deleteTransactionLog/:id', TransactionLogController.deleteTransactionLogID);

module.exports = router; //Todo lo contendrá el router.