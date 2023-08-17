const VeiculoService = require('../services/VeiculoService');


module.exports = {

    buscarTodosVeiculos: async (req, res) => {

        let json = { error: '', result: [] };

        let veiculos = await VeiculoService.buscarTodosVeiculos();

        for (let i in veiculos) {
            json.result.push({
                codigo: veiculos[i].codigo,
                tipo: veiculos[i].tipo,
                modelo: veiculos[i].modelo,
                cor: veiculos[i].cor,
                placa: veiculos[i].placa
            })
        }

        res.json(json)
    },


    buscarUmVeiculo: async (req, res) => {

        let json = { error: '', result: {} };

        let codigo = req.params.codigo;
        let veiculo = await VeiculoService.buscarUmVeiculo(codigo);

        if (veiculo) {
            json.result = veiculo;
        }

        res.json(json);
    },


    cadastrarVeiculo: async (req, res) => {

        let json = { error: '', result: {} };

        let tipo = req.body.tipo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;
        let cor = req.body.cor;

        if (tipo && modelo && placa && cor ) {
            let veiculoCodigo = await VeiculoService.cadastrarVeiculo(tipo, modelo, placa, cor);
            json.result = {
                codigo: veiculoCodigo,
                tipo,
                modelo,
                placa,
                cor
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },

    alterarVeiculo: async (req, res) => {

        let json = { error: '', result: {} };

        let codigo = req.params.codigo;
        let tipo = req.params.tipo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;
        let cor = req.body.cor;


        if (codigo && modelo && placa && cor) {
            await VeiculoService.alterarVeiculo(codigo, tipo, modelo, placa, cor);

            json.result = {
                codigo,
                tipo,
                modelo,
                placa,
                cor
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json)

    },


    deletarVeiculo: async (req, res) => {
        let json = { error: '', result: {} };

        await VeiculoService.deletarVeiculo(req.params.codigo);

        res.json(json)
    }


}