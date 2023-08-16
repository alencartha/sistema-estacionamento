const db = require('../db');

module.exports = {

    buscarTodosCarros: () => {

        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results)
            });
        });
    },

    buscarUmCarro: (codigo) => {

        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {

                if (error) { rejeitado(error); return; };

                if (results.length > 0) {
                    aceito(results[0])
                } else {
                    aceito(false)
                }
            })

        });
    },

    cadastrarCarro: (modelo, placa, cor) => {

        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO carros (modelo, placa, cor) VALUES (?, ?, ?)',
                [modelo, placa, cor],
                (error, results) => {

                    if (error) { rejeitado(error); return; };
                    aceito(results.insertCodigo);
                })

        });
    },


    alterarCarro: (codigo, modelo, placa, cor) => {

        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE carros SET modelo = ?, placa = ?, cor = ? WHERE codigo = ?',
                [modelo, placa, cor, codigo],
                (error, results) => {

                    if (error) { rejeitado(error); return; };
                    aceito(results);
                })

        });
    },

    deletarCarro: (codigo) => {

        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM carros WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results)
            });
        });
    }






};