const express = require('express');
const router = express.Router();

const VeiculoController = require('./controllers/VeiculoController');

router.get('/veiculos', VeiculoController.buscarTodosVeiculos);
router.get('/veiculo/:codigo', VeiculoController.buscarUmVeiculo);
router.post('/veiculo', VeiculoController.cadastrarVeiculo);
router.put('/veiculo/:codigo', VeiculoController.alterarVeiculo);
router.delete('/veiculo/:codigo', VeiculoController.deletarVeiculo);

module.exports = router;