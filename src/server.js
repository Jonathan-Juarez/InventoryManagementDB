require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db'); //Treaerá el conectDB de la dirección colocada.
const CategoryRoutes = require('./routes//CategoryRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const ProviderRoutes = require('./routes/ProviderRoutes');
const StaffRoutes = require('./routes/StaffRoutes');
const TransactionLogRoutes = require('./routes/TransactionLogRoutes');

const app = express();

app.use(cors());
app.use(express.json());

//Rutas accesibles en la API.
app.use('/api', CategoryRoutes); //http://localhost:3005/api/(depende del contenido CRUD selecciondo.)
app.use('/api', ProductRoutes);
app.use('/api', ProviderRoutes);
app.use('/api', StaffRoutes);
app.use('/api', TransactionLogRoutes);


//Iniciar el servidor.
const PORT = process.env.PORT || 3005
app.listen(PORT, async () => { //Escucha al port y devuelve un valor asíncrono.
    await connectDB();
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`); //Dirección base del servidor.
});


