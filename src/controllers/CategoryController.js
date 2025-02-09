const { client } = require('../config/db');
const { colletionName } = require('../models/Category'); //Devuelve solo colletionName.
const { ObjectId } = require('mongodb');//Driver para administrar la DB con un Id de MongoDB.

//CRUD de la colección category.

//Crear una categoría.
async function createCategory(req, res) {
    try {
        const db = client.db(); //Se accesa de forma directa a la DB con la const db.
        const category = await db.collection(colletionName).insertOne(req.body); //Devuelve el resultado de insercción de datos.
        res.status(201).json(category); //201 indica que la operación se ha sido realizado con éxito.
    } catch (error) {
        res.status(500).json("Error interno del servidor al crear una categoría."); //500 es un error interno del servidor que indica que el servidor ha encontrado una condición inesperada que le impidió cumplir con la solicitud.
    }
}
//Buscar todos las categorías.
async function findCategory(req, res) {
    try {
        const db = client.db();
        const category = await db.collection(colletionName).find().toArray(); //Devuelve todo lo que se encuentre como un arreglo por ser varios documentos de la colección category. 
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json("Error interno del servidor al buscar una categoría.");
    }
}
//Buscar una categoría por ID.
async function findCategoryID(req, res) {
    try {
        const db = client.db();
        const category = await db.collection(colletionName).findOne({ _id: new ObjectId(req.params.id) });  //El new ObjectID permite la conversión del id a ObjectId. El params es el que está recibiendo de un parámetro.
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json("Error interno del servidor al buscar una categoría por ID.");
    }
}
//Actualizar una categoría por ID.
async function updateCategoryID(req, res) {
    try {
        const db = client.db();
        const category = await db.collection(colletionName).updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json("Error interno del servidor al actualizar una categoría por ID.");
    }
}
//Eliminar una categoría por ID.
async function deleteCategoryID(req, res) {
    try {
        const db = client.db();
        const category = await db.collection(colletionName).deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json("Error interno del servidor al eliminar una categoría por ID.");
    }
}
module.exports = {
    createCategory,
    findCategory,
    findCategoryID,
    updateCategoryID,
    deleteCategoryID
}