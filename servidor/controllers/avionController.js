const Avion = require("../models/Avion");

exports.crearAvion = async (req, res) => {
    try {
        const avion = req.body;
        const avionId = await Avion.crearAvion(avion);
        res.status(201).json({ id: avionId, ...avion });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear el avión');
    }
};



exports.obtenerAviones = async (req, res) => {
    try {
        const aviones = await Avion.obtenerAviones();
        res.json(aviones);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los aviones');
    }
};

// Implementa las funciones restantes según sea necesario
