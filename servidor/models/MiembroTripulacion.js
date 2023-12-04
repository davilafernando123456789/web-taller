const db = require('../config/db');

const MiembroTripulacion = {};

MiembroTripulacion.crearMiembroTripulacion = async (miembro) => {
    try {
        const [result] = await db.execute(
            'INSERT INTO miembros_tripulacion (codigo, nombre) VALUES (?, ?)',
            [miembro.codigo, miembro.nombre]
        );
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

MiembroTripulacion.obtenerMiembrosTripulacion = async () => {
    try {
        const [miembros] = await db.execute('SELECT * FROM miembros_tripulacion');
        return miembros;
    } catch (error) {
        throw error;
    }
};

// Implementa las funciones restantes según sea necesario

module.exports = MiembroTripulacion;
