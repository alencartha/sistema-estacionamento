const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodosCarros);
router.get('/carro/:codigo', CarroController.buscarUmCarro);
router.post('/carro', CarroController.cadastrarCarro);
router.put('/carro/:codigo', CarroController.alterarCarro);
router.delete('/carro/:codigo', CarroController.deletarCarro);

module.exports = router;