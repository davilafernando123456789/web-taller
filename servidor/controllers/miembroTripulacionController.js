const MiembroTripulacion = require("../models/MiembroTripulacion");

exports.crearMiembroTripulacion = async (req, res) => {
    try {
        const miembro = req.body;
        const miembroId = await MiembroTripulacion.crearMiembroTripulacion(miembro);
        res.status(201).json({ id: miembroId, ...miembro });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear el miembro de tripulación');
    }
};

exports.obtenerMiembrosTripulacion = async (req, res) => {
    try {
        const miembros = await MiembroTripulacion.obtenerMiembrosTripulacion();
        res.json(miembros);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los miembros de tripulación');
    }
};

// Implementa las funciones restantes según sea necesario
