const Vuelo = require("../models/Vuelo");

exports.crearVuelo = async (req, res) => {
    try {
        const vuelo = req.body;
        const vueloId = await Vuelo.crearVuelo(vuelo);
        res.status(201).json({ id: vueloId, ...vuelo });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear el vuelo');
    }
};

exports.obtenerVuelos = async (req, res) => {
    try {
        const vuelos = await Vuelo.obtenerVuelos();
        res.json(vuelos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los vuelos');
    }
};

// Implementa las funciones restantes según sea necesario
