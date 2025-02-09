require('dotenv').config(); //Antes que lea lo demás del archivo, lea lo que posea la variable dontev.
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI) //Lee la url del proceso .env de la variable MONGO_URI.

async function connectDB() { //Conecta a MongoDB
    try {
        await client.connect();
        console.log("🟢 Conexión a MongoDB exitosa.");
    } catch (error) {
        console.log("🔴 Error al conectar a MongoDB.", error);
    }
}

module.exports = { //Exporta el client y connectDB
    client,
    connectDB
}