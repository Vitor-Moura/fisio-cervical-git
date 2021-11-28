// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;       
        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function validarSessaoFisioterapeutas() {
    // aguardar();

    var email = sessionStorage.EMAIL_FISIOTERAPEUTA;
    var nome = sessionStorage.NOME_FISIOTERAPEUTA;
    var id = sessionStorage.ID_FISIOTERAPEUTA;
    
    if (email != null && nome != null) {
        // b_fisioterapeuta.innerHTML = `${nome}<br>Código: ${id}`; 
        b_fisioterapeuta.innerHTML = `<h2 style="margin-bottom: 0px";>Fisioterapeuta: ${nome}</h2>
        <span style="font-size: 16px;">Código: ${id}</span>`;      
        // finalizarAguardar();
    } else {
        window.location = "../login-fisioterapeutas.html";
    }
}
   
function limparSessao() {
    // aguardar();
    sessionStorage.clear();
   // finalizarAguardar();
    window.location = "../login.html";
}

function limparSessaoFisioterapeutas() {
    // aguardar();
    sessionStorage.clear();
   // finalizarAguardar();
    window.location = "../login-fisioterapeutas.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex"; 
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";
    
    var divErrosLogin = document.getElementById("div_erros_login");
    if(texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

