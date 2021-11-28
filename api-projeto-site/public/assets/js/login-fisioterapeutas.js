function entrar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login_fisioterapeutas")));

    console.log("FORM LOGIN: ", formulario.get("login"));
    console.log("FORM SENHA: ", formulario.get("senha"));

    fetch("/fisioterapeutas/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {                    
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.LOGIN_FISIOTERAPEUTA = json.login;
                sessionStorage.NOME_FISIOTERAPEUTA = json.nome;
                sessionStorage.ID_FISIOTERAPEUTA = json.id;

                setTimeout(function () {
                    window.location = "/index.html";
                }, 1000);
            });

        } else {

            console.log("Erro de login!");

            resposta.text().then(texto => {
                console.error(texto);                    
                // limparFormulario();
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function validarSessao() {
    aguardar();

    var login = sessionStorage.LOGIN_FISIOTERAPEUTA;
    var nome = sessionStorage.NOME_FISIOTERAPEUTA;
    
    var h1Titulo = document.getElementById("h1_titulo");

    if (login != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;
        
        finalizarAguardar();
    } else {
        window.location = "login-fisioterapeutas.html";
    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "login-fisioterapeutas.html";
}