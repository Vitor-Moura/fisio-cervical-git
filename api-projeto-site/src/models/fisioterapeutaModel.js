var database = require("../database/config")

function listar() {
    console.log("ACESSEI O pretreino MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT
    idFisioterapeuta,
    usuario.id as 'paciente_id',
    usuario.nome as 'paciente_nome',
    nivelDor1,
    descDor1,
    DATE_FORMAT(dtRegistro1, '%d/%m/%Y - %H:%i hrs') as 'data1'
    FROM
    pretreino 
    JOIN usuario
        on fkUsuario=usuario.id
    JOIN fisioterapeuta
        on fkFisioterapeuta = idFisioterapeuta
    order by usuario.nome asc
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}


function entrar(email, senha) {
    console.log("ACESSEI O FISIOTERAPEUTA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM fisioterapeuta WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O FISIOTERAPEUTA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    var instrucao = `
        INSERT INTO fisioterapeuta (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};