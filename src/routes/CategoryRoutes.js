const express = require('express');  //Inicializar un servidor web HTTP o HTTPS. 
const router = express.Router(); //Obtener de express el módulo de rutas (router).
const CategoryController = require('../controllers/CategoryController');

//Crear una Categoría.
router.post('/createCategory', CategoryController.createCategory);
//Obtener todas las Categorías.
router.post('/findCategory', CategoryController.findCategory);
//Obtener una Categoría por ID.
router.post('/findCategory/:id', CategoryController.findCategoryID);
//Actualizar una Categoría por ID.
router.post('/updateCategory/:id', CategoryController.updateCategoryID);
//Eliminar una Categoría por ID.
router.post('/deleteCategory/:id', CategoryController.deleteCategoryID);

module.exports = router; //Todo lo contendrá el router.