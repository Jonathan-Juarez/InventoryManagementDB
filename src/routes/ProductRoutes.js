const express = require('express');  //Inicializar un servidor web HTTP o HTTPS. 
const router = express.Router(); //Obtener de express el módulo de rutas (router).
const ProductController = require('../controllers/ProductController');

//Crear un producto.
router.post('/createProduct', ProductController.createProduct);
//Obtener todos los productos.
router.post('/findProduct', ProductController.findProduct);
//Obtener un producto por ID.
router.post('/findProduct/:id', ProductController.findProductID);
//Actualizar un producto por ID.
router.post('/updateProduct/:id', ProductController.updateProductID);
//Eliminar un producto por ID.
router.post('/deleteProduct/:id', ProductController.deleteProductID);

module.exports = router; //Todo lo contendrá el router.