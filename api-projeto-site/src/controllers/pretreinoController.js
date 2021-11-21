var pretreinoModel = require("../models/pretreinoModel");

var sessoes = [];

function testar (req, res) {
    console.log("ENTRAMOS NA pretreinoController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    pretreinoModel.listar()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function cadastrar(req, res) {
    var nivelDor1 = req.body.nivelDor1;
    var descDor1 = req.body.descDor1;

    var idUsuario = req.params.idUsuario;

    if (nivelDor1 == undefined) {
        res.status(400).send("Seu nivelDor1 está undefined!");
    } else if (descDor1 == undefined) {
        res.status(400).send("Seu descDor1 está undefined!");
    } else if ( idUsuario == undefined) {
        res.status(403).send("Seu usuário está undefined!");
    } else {
        pretreinoModel.cadastrar(nivelDor1, descDor1, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    cadastrar,
    listar,   
    testar
}