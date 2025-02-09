const { client } = require('../config/db');
const { colletionName } = require('../models/Product'); //Devuelve solo colletionName.
const { ObjectId } = require('mongodb');//Driver para administrar la DB con un Id de MongoDB.

//CRUD de la colección Product.

//Crear un producto.
async function createProduct(req, res) {
    try {
        const db = client.db(); //Se accesa de forma directa a la DB con la const db.
        const product = await db.collection(colletionName).insertOne(req.body); //Devuelve el resultado de insercción de datos.
        res.status(201).json(product); //201 indica que la operación se ha sido realizado con éxito.
    } catch (error) {
        res.status(500).json("Error interno del servidor al crear un producto."); //500 es un error interno del servidor que indica que el servidor ha encontrado una condición inesperada que le impidió cumplir con la solicitud.
    }
}
//Buscar todos los productos.
async function findProduct(req, res) {
    try {
        const db = client.db();
        const product = await db.collection(colletionName).find().toArray(); //Devuelve todo lo que se encuentre como un arreglo por ser varios documentos de la colección product. 
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json("Error interno del servidor al buscar un producto.");
    }
}
//Buscar un producto por ID.
async function findProductID(req, res) {
    try {
        const db = client.db();
        const product = await db.collection(colletionName).findOne({ _id: new ObjectId(req.params.id) });  //El new ObjectID permite la conversión del id a ObjectId. El params es el que está recibiendo de un parámetro.
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json("Error interno del servidor al buscar un producto por ID.");
    }
}
//Actualizar un producto por ID.
async function updateProductID(req, res) {
    try {
        const db = client.db();
        const product = await db.collection(colletionName).updateOne({ _id: new ObjectId(req.params._id) }, { $set: req.body });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json("Error interno del servidor al actualizar un producto por ID.");
    }
}
//Eliminar un producto por ID.
async function deleteProductID(req, res) {
    try {
        const db = client.db();
        const product = await db.collection(colletionName).deleteOne({ _id: new ObjectId(req.params._id) });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json("Error interno del servidor al eliminar un producto por ID.");
    }
}
module.exports = {
    createProduct,
    findProduct,
    findProductID,
    updateProductID,
    deleteProductID
}