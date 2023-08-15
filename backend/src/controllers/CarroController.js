const CarroService = require('../services/CarroService');

module.exports = {

    buscarTodos: async (req, res) => {

        let json = { error: '', result: [] };

        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                modelo: carros[i].modelo,
                cor: carros[i].cor,
                placa: carros[i].placa
            })
        }

        res.json(json)
    },


    buscarUm: async (req, res) => {

        let json = { error: '', result: {} };

        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUm(codigo);

        if (carro) {
            json.result = carro;
        }

        res.json(json);
    },


    cadastrarCarro: async (req, res) => {

        let json = { error: '', result: {} };

        let modelo = req.body.modelo;
        let placa = req.body.placa;
        let cor = req.body.cor;

        if (modelo && placa && cor) {
            let carroCodigo = await CarroService.cadastrarCarro(modelo, placa, cor);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa,
                cor
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json);
    }


}