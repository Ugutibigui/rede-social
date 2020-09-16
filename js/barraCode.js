var usuarioLogado = JSON.parse(localStorage.getItem("usuarioAtual")) || []
var usuarios = JSON.parse(localStorage.getItem("usuarios"))

$(document).ready(function() {
    $(".menu_btn > a").click(function(e) {
        $(this).closest('.menu_btn').toggleClass("hover");
        e.stopPropagation();
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.hover').length) $('.menu_btn').removeClass("hover");
    });
});

function Mudarestado() {
    var display = document.getElementById("minhaDiv").style.display;
    if (display == "none") {
        document.getElementById("minhaDiv").style.display = 'block';
        document.getElementById("fundoFalso").style.filter = "blur(10px)"
    } else
        document.getElementById('minhaDiv').style.display = 'none';

}

function fechaPerfil() {
    document.getElementById("minhaDiv").style.display = 'none';
    document.getElementById("fundoFalso").style.filter = "none"

}

function trocaNomePage() {
    var name = document.getElementById("tituloPage")
    name.innerHTML = usuarioLogado.nomeUsuario
}
trocaNomePage()

function colocaNomePerfil() {
    document.getElementById("nomePerfil").innerHTML = usuarioLogado.nomeUsuario
}
colocaNomePerfil()


console.log(usuarioLogado)