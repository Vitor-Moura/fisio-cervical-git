var database = require("../database/config")

function listar() {
    console.log("ACESSEI O pretreino MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM pretreino;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nivelDor1, descDor1) {
    console.log("ACESSEI O pretreino MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nivelDor1, descDor1);
    var instrucao = `
        INSERT INTO pretreino (nivelDor1, descDor1) VALUES ('${nivelDor1}', '${descDor1}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
};