const db = require('../db');

module.exports = {

    buscarTodosVeiculos: () => {

        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM veiculos', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results)
            });
        });
    },

    buscarUmVeiculo: (codigo) => {

        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM veiculos WHERE codigo = ?', [codigo], (error, results) => {

                if (error) { rejeitado(error); return; };

                if (results.length > 0) {
                    aceito(results[0])
                } else {
                    aceito(false)
                }
            })

        });
    },

    cadastrarVeiculo: (tipo, modelo, placa, cor) => {

        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO veiculos (tipo, modelo, placa, cor) VALUES (?, ?, ?, ?)',
                [tipo, modelo, placa, cor],
                (error, results) => {

                    if (error) { rejeitado(error); return; };
                    aceito(results.insertCodigo);
                })

        });
    },


    alterarVeiculo: (codigo, tipo, modelo, placa, cor) => {

        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE veiculos SET tipo = ?, modelo = ?, placa = ?, cor = ? WHERE codigo = ?',
                [tipo, modelo, placa, cor, codigo],
                (error, results) => {

                    if (error) { rejeitado(error); return; };
                    aceito(results);
                })

        });
    },

    deletarVeiculo: (codigo) => {

        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM veiculos WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results)
            });
        });
    }






};