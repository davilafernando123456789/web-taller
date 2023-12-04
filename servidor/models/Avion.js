const db = require('../config/db');

const Avion = {};


Avion.crearAvion = async (avion) => {
    try {
        const [result] = await db.execute(
            'INSERT INTO aviones (codigo, tipo, baseMantenimiento) VALUES (?, ?, ?)',
            [avion.codigo, avion.tipo, avion.baseMantenimiento]
        );
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

Avion.obtenerAviones = async () => {
    try {
        const [aviones] = await db.execute('SELECT * FROM aviones');
        return aviones;
    } catch (error) {
        throw error;
    }
};

// Implementa las funciones restantes según sea necesario

module.exports = Avion;
