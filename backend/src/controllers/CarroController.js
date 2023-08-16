const CarroService = require('../services/CarroService');

module.exports = {

    buscarTodosCarros: async (req, res) => {

        let json = { error: '', result: [] };

        let carros = await CarroService.buscarTodosCarros();

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


    buscarUmCarro: async (req, res) => {

        let json = { error: '', result: {} };

        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUmCarro(codigo);

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
    },

    alterarCarro: async (req, res) => {

        let json = { error: '', result: {} };

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;
        let cor = req.body.cor;


        if (codigo && modelo && placa && cor) {
            await CarroService.alterarCarro(codigo, modelo, placa, cor);

            json.result = {
                codigo,
                modelo,
                placa,
                cor
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json)

    },


    deletarCarro: async (req, res) => {
        let json = { error: '', result: {} };

        await CarroService.deletarCarro(req.params.codigo);

        res.json(json)
    }


}