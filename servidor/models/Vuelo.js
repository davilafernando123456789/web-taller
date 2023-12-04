const db = require('../config/db');

const Vuelo = {};

Vuelo.crearVuelo = async (vuelo) => {
    try {
        const [result] = await db.execute(
            'INSERT INTO vuelos (numeroVuelo, origen, destino, hora, estado) VALUES (?, ?, ?, ?, ?)',
            [vuelo.numeroVuelo, vuelo.origen, vuelo.destino, vuelo.hora, vuelo.estado]
        );
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

Vuelo.obtenerVuelos = async () => {
    try {
        const [vuelos] = await db.execute('SELECT * FROM vuelos');
        return vuelos;
    } catch (error) {
        throw error;
    }
};

// Implementa las funciones restantes según sea necesario

module.exports = Vuelo;
