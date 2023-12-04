const express = require('express');
const router = express.Router();
const miembroTripulacionController = require('../controllers/miembroTripulacionController');

// /api/miembros-tripulacion
router.post('/', miembroTripulacionController.crearMiembroTripulacion);
router.get('/', miembroTripulacionController.obtenerMiembrosTripulacion);
// router.put('/:id', miembroTripulacionController.actualizarMiembroTripulacion);
// router.get('/:id', miembroTripulacionController.verMiembroTripulacion);
// router.delete('/:id', miembroTripulacionController.eliminarMiembroTripulacion);

module.exports = router;
