let usuarioLogado = usuarioLogadoBack()
var usuarios = usuariosBack()

if (usuariosBack() !== null) {
    usuarios 
} else {
    usuarios = []
}
let fotoUsuario = document.getElementById("caixaTextoFoto").value
    //ver oque esta escrito na senha

function mostrarSenha() {
    var tipo = document.getElementById("senha")
    if (tipo.type == "password") {
        tipo.type = "text";
    } else {
        tipo.type = "password"
    }

}

function mostrarSenhas() {
    var tipo = document.getElementById("senhas")
    if (tipo.type == "password") {
        tipo.type = "text";
    } else {
        tipo.type = "password"
    }

}
//--------------------------------------------------------------------------------
function cadastrarNovoUsuario() {
    // pegar o que a pessoa digitou no input nomeUsuario
    let nomeUsuario = document.getElementById("nomeUsuarios").value.trim()
        // pegar o que a pessoa digitou no input senha
    let senha = document.getElementById("senhas").value.trim()
        // criar um id para essa pessoa
    let idUsuario = usuarios.length + 1

    let fotoUsuario = document.getElementById("caixaTextoFoto").value
        // verificar se o nomeUsuario digitado nao é vazio
    if (nomeUsuario === "") {
        // mostrar para o usuario que o nome de usuario é invalido
        alert("nome de usuario vazio")
            //parar de executar minha funcao
        return;
    }
    // verificar se senha digitado nao é vazio
    if (senha === "") {
        alert("senha vazia é invalida")
        return;
    }
    //Não deixa entrar se o nome ja existe 

    for (let i = 0; i < usuarios.length; i++) {
        console.log(i, usuarios[i])
        if (usuarios[i].nomeUsuario === nomeUsuario) {
            console.log(i)
            alert("Ja existe")
            return
        }
    }

    // cria novo objecto do novo usuario
    let novoUsuario = { id: idUsuario, nomeUsuario: nomeUsuario, senha: senha, fotoUsuario: fotoUsuario }

    //salva novo usuario na lista
    usuarios.push(novoUsuario)
    mandarUsuarioBack(usuarios)

    alert("Novo usuario cadastrado, por favor faça login")
}



function entrar() {
    // pegar o que a pessoa digitou no input nomeUsuario
    let nomeUsuario = document.getElementById("nomeUsuario").value
        // pegar o que a pessoa digitou no input senha
    let senha = document.getElementById("senha").value

    // verificar se o nomeUsuario digitado nao é vazio
    if (nomeUsuario === "") {
        // mostrar para o usuario que o nome de usuario é invalido
        alert("nome de usuario vazio")
            //parar de executar minha funcao
        return;
    }
    // verificar se senha digitado nao é vazio
    if (senha === "") {
        alert("senha vazia é invalida")
        return;
    }
    var fotoUser 
    var Userlogado = false;
    let i = 0
    
    for (; i < usuarios.length; i++) {
        if (usuarios[i].nomeUsuario === nomeUsuario && usuarios[i].senha === senha) {
            fotoUser = usuarios[i].fotoUsuario
            alert("brazileiro" + fotoUser)
            Userlogado = true;
            let usuarioAtual = { nomeUsuario: nomeUsuario , fotoUsuario: fotoUser}
            localStorage.setItem("usuarioAtual", JSON.stringify(usuarioAtual))
            console.log(i)
            break
        } else Userlogado = false;
    }
    if (Userlogado) {
        window.location.href = "../pages/page.html"

    } else alert("Nome de usuario ou senha incorretos")


    //if(usuario[0].nomeUsuario === nomeUsuario && usuarios[0].senha === senha){
    // logado
    //}


}

function abrirAbaFoto() {
    var display = document.getElementById("minhaDiv").style.display;
    if (display == "none") {
        document.getElementById("minhaDiv").style.display = 'block';
        document.getElementById("fundoFalso").style.filter = "blur(30px)"
    } else
        document.getElementById('minhaDiv').style.display = 'none';

}

function fecharAddFoto() {
    document.getElementById("minhaDiv").style.display = 'none';
    document.getElementById("fundoFalso").style.filter = "none"

}

function mostrarUsuario() {
    console.log(usuarios)
}

console.log(usuarios)

if (usuarioLogado.nomeUsuario.length > 0) location.href = "../pages/page.html"