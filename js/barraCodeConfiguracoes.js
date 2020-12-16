var usuarioLogado = JSON.parse(localStorage.getItem("usuarioAtual")) || []
var usuarios = JSON.parse(localStorage.getItem("usuarios"))

document.getElementById("nomeUserButtonPerfil").innerText = usuarioLogado.nomeUsuario

function carregaMineFotoPerfil(){
    var foto = usuarioLogado.fotoUsuario
    let divFoto = document.getElementById("fotoBarraPerfil")
    divFoto.style.backgroundImage = `url('${foto}')`
    divFoto.style.backgroundSize = "cover"
}
carregaMineFotoPerfil()

function Mudarestado() {
    var display = document.getElementById("minhaDiv").style.display;
    if (display == "none") {
        document.getElementById("minhaDiv").style.display = 'block';
        document.getElementById("fundoFalso").style.filter = "blur(10px)"
        document.getElementById("fundo").style.overflow = "hidden"
        document.getElementById("minhaDiv").style.transition = "1s"
    } else {
        document.getElementById('minhaDiv').style.display = 'none';
        document.getElementById("minhaDiv").style.transition = "1s"
    }
}

function fechaPerfil() {
    document.getElementById("minhaDiv").style.display = 'none';
    document.getElementById("fundoFalso").style.filter = "none"
    document.getElementById("fundo").style.overflow = "auto"

}
console.log(usuarioLogado)