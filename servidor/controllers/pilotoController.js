const Piloto = require("../models/Piloto");

exports.crearPiloto = async (req, res) => {
    try {
        const piloto = req.body;
        const pilotoId = await Piloto.crearPiloto(piloto);
        res.status(201).json({ id: pilotoId, ...piloto });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear el piloto');
    }
};

exports.obtenerPilotos = async (req, res) => {
    try {
        const pilotos = await Piloto.obtenerPilotos();
        res.json(pilotos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los pilotos');
    }
};

// Implementa las funciones restantes según sea necesario
