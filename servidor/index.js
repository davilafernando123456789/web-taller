const express = require('express');
const db = require('./config/db');  // Cambiado de dbConfig a db
const config = require('./config/global');
const cors = require('cors');

const app = express();

// Conectar BD (No es necesario llamar a dbConfig como una función)
// dbConfig();

app.use(cors());
app.use(express.json());

app.use('/api/aviones', require('./routes/avion'));
app.use('/api/pilotos', require('./routes/piloto'));
app.use('/api/miembros-tripulacion', require('./routes/miembroTripulacion'));
app.use('/api/vuelos', require('./routes/vuelo'));

app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000');
});
