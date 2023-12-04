const db = require('../config/db');

const Piloto = {};

Piloto.crearPiloto = async (piloto) => {
    try {
        const [result] = await db.execute(
            'INSERT INTO pilotos (codigo, nombre, horasVuelo) VALUES (?, ?, ?)',
            [piloto.codigo, piloto.nombre, piloto.horasVuelo]
        );
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

Piloto.obtenerPilotos = async () => {
    try {
        const [pilotos] = await db.execute('SELECT * FROM pilotos');
        return pilotos;
    } catch (error) {
        throw error;
    }
};

// Implementa las funciones restantes según sea necesario

module.exports = Piloto;
