const { client } = require('../config/db');
const { colletionName } = require('../models/Provider'); //Devuelve solo colletionName.
const { ObjectId } = require('mongodb');//Driver para administrar la DB con un Id de MongoDB.

//CRUD de la colección Provider.

//Crear un proveedor.
async function createProvider(req, res) {
    try {
        const db = client.db(); //Se accesa de forma directa a la DB con la const db.
        const Provider = await db.collection(colletionName).insertOne(req.body); //Devuelve el resultado de insercción de datos.
        res.status(201).json(Provider); //201 indica que la operación se ha sido realizado con éxito.
    } catch (error) {
        res.status(500).json("Error interno del servidor al crear un proveedor."); //500 es un error interno del servidor que indica que el servidor ha encontrado una condición inesperada que le impidió cumplir con la solicitud.
    }
}
//Buscar todos los proveedores.
async function findProvider(req, res) {
    try {
        const db = client.db();
        const Provider = await db.collection(colletionName).find().toArray(); //Devuelve todo lo que se encuentre como un arreglo por ser varios documentos de la colección Provider. 
        res.status(201).json(Provider);
    } catch (error) {
        res.status(500).json("Error interno del servidor al buscar un proveedor.");
    }
}
//Buscar un proveedor por ID.
async function findProviderID(req, res) {
    try {
        const db = client.db();
        const Provider = await db.collection(colletionName).findOne({ _id: new ObjectId(req.params.id) });  //El new ObjectID permite la conversión del id a ObjectId. El params es el que está recibiendo de un parámetro.
        res.status(201).json(Provider);
    } catch (error) {
        res.status(500).json("Error interno del servidor al buscar un proveedor por ID.");
    }
}
//Actualizar un proveedor por ID.
async function updateProviderID(req, res) {
    try {
        const db = client.db();
        const Provider = await db.collection(colletionName).updateOne({ _id: new ObjectId(req.params._id) }, { $set: req.body });
        res.status(201).json(Provider);
    } catch (error) {
        res.status(500).json("Error interno del servidor al actualizar un proveedor por ID.");
    }
}
//Eliminar un proveedor por ID.
async function deleteProviderID(req, res) {
    try {
        const db = client.db();
        const Provider = await db.collection(colletionName).deleteOne({ _id: new ObjectId(req.params._id) });
        res.status(201).json(Provider);
    } catch (error) {
        res.status(500).json("Error interno del servidor al eliminar un proveedor por ID.");
    }
}
module.exports = {
    createProvider,
    findProvider,
    findProviderID,
    updateProviderID,
    deleteProviderID
}