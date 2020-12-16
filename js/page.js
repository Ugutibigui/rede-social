var usuarios = usuariosBack()
        var Amigos = amigosBack()
        var usuarioLogado = usuarioLogadoBack()
        if (!usuarioLogado.nomeUsuario) location.href = "../pages/main.html"
        document.getElementById("nomeUserButtonPerfil").innerText = usuarioLogado.nomeUsuario
        let postagensText = postagensTextBack()
        let postagensVide = postagensVideBack()
        let postagensImg = postagensImgBack()

        let todasPubs = []

        let todosAmigos = amiguitosFunction()
        let todosAmigosId = []

        var agrupaPubs = todasPubs.concat(postagensText, postagensVide, postagensImg)
        console.log("concat", agrupaPubs)
        console.log('publication', todasPubs)
        todasPubs = agrupaPubs

        function aumentarTextareaPub(){
            var textarea = document.getElementById("pub-escrita")
            var botaoTextareaFecha = document.getElementById("fechaTextareaPub")
                textarea.style.height = "150px"
                textarea.style.transition = "0.5s"
                botaoTextareaFecha.style.opacity = "100%"
                botaoTextareaFecha.style.transition = "0.5s"
        }
        function diminuirTextareaPublicacao(){
            var textarea = document.getElementById("pub-escrita")
            var botaoTextareaFecha = document.getElementById("fechaTextareaPub")
            botaoTextareaFecha.style.opacity = "0%"
            botaoTextareaFecha.style.transition = "0.5s"
            textarea.style.height = "34px"
                textarea.style.transition = "0.5s"
        }

        function carregaFotoPerfil(){
            var foto = usuarioLogado.fotoUsuario
            let divFoto = document.getElementById("paraFoto")
            let divFoto2 = document.getElementById("imagemPubPerfil")
            divFoto.style.backgroundImage = `url('${foto}')`
            divFoto.style.backgroundRepeat = "no-repeat"
            divFoto.style.backgroundSize = "cover"

            divFoto2.style.backgroundImage = `url('${foto}')`
            divFoto2.style.backgroundRepeat = "no-repeat"
            divFoto2.style.backgroundSize = "cover"
        }
        carregaFotoPerfil()



        function carregaMineFotoPerfil(){
            var foto = usuarioLogado.fotoUsuario
            let divFoto = document.getElementById("fotoBarraPerfil")
            divFoto.style.backgroundImage = `url('${foto}')`
            divFoto.style.backgroundSize = "cover"
            
        }
        carregaMineFotoPerfil()

       function carregaCapaPerfil(){
            var foto
            let divCapa = document.getElementById("capaPerfil")
            divCapa.style.backgroundImage = "url('https://i.pinimg.com/originals/52/96/7e/52967e9aee1c617cb0668d3ef1704eba.jpg')"
            divCapa.style.backgroundSize = "cover"
        }
        carregaCapaPerfil()

        function carregaTodosPosts() {
            let postagem = document.getElementById("pub")
            let quantidade = todasPubs.length
            console.log("quantidade", quantidade)
            for (let i = 0; i < quantidade; i++) {
                console.log("todas pubs", todasPubs)
                console.log("pubs", todasPubs.tipo)
                if (todasPubs[i] == null) {
                    return
                }
                else if (todasPubs[i].tipo === "text") {
                    postagem.innerHTML += `<div class="dataPub">${todasPubs[i].data}</div>`
                    postagem.innerHTML += `<div class="pub-geral"><div class="content-superior-pub"><div class="foto-pessoa-pub"></div><p class="nomeDeQuemPublicou">${todasPubs[i].from}</div><div class="content-inferior-pub"><p class="postagem-paragrafo">${todasPubs[i].content}</p></div><div class="interacao-pub"><div class="comentario-pub">Comentario</div><div class="curtida">Curtir</div></div></div>`
                    console.log("texto")
                    
                } else if (todasPubs[i].tipo === "video") {
                    postagem.innerHTML += `<div class="dataPub">${todasPubs[i].data}</div>`
                    postagem.innerHTML += `<div class="pub-geral"><div class="content-superior-pub"><div class="foto-pessoa-pub"></div><p class="nomeDeQuemPublicou">${todasPubs[i].from}</div><div class="content-inferior-pub"><video controls class="postagem-paragrafo , postagem-video"><source src="${todasPubs[i].content}" type="video/mp4"></source></video></div><div class="interacao-pub"><div class="comentario-pub">Comentario</div><div class="curtida">Curtir</div></div></div>`
                    console.log("video")
                } else if (todasPubs[i].tipo === "img") {
                    postagem.innerHTML += `<div class="dataPub">${todasPubs[i].data}</div>`
                    postagem.innerHTML += `<div class="pub-geral"><div class="content-superior-pub"><div class="foto-pessoa-pub"></div><p class="nomeDeQuemPublicou">${todasPubs[i].from}</div><div class="content-inferior-pub"><img class="postagem-img" src="${todasPubs[i].content}"></div><div class="interacao-pub"><div class="comentario-pub">Comentario</div><div class="curtida">Curtir</div></div></div>`
                    console.log("img")
                } 
            }
        }
        carregaTodosPosts()

        function publicarVideo() {
            let publicador = usuarioLogado.nomeUsuario
            let p = document.getElementById("pub-vide").value
            if (!p) return alert("Sua publicação está vazia")
            let publicacoes = chamarLocalStorageVide()
            if (!publicacoes) publicacoes = []
            let data = new Date()
            data = data.toString()
            let postagem = document.getElementById("pub")
            postagem.innerHTML += `<div class="dataPub">${data}</div>`
            postagem.innerHTML += `<div class="pub-geral"><div class="content-superior-pub"><div class="foto-pessoa-pub"></div><p class="nomeDeQuemPublicou">${publicador}</div><div class="content-inferior-pub"><video controls class="postagem-paragrafo , postagem-video"><source src="${p}" type="video/mp4"></source></video></div><div class="interacao-pub"><div class="comentario-pub">Comentario</div><div class="curtida">Curtir</div></div></div>`
            
            let vide = {
                from: publicador,
                content: p,
                data: data,
                tipo: "video"
            }
            publicacoes.unshift(vide)
            localStorageVide(publicacoes)
        }


        function publicar() {
            let publicador = usuarioLogado.nomeUsuario
            let p = document.getElementById("pub-escrita").value
            if (!p) return alert("Sua publicação está vazia")
            let publicacoes = chamarLocalStorageText()
            if (!publicacoes) publicacoes = []
            let data = new Date()
            data = data.toString()
            let postagem = document.getElementById("pub")
            postagem.innerHTML += `<div class="dataPub">${data}</div>`
            postagem.innerHTML += postagem.innerHTML += `<div class="pub-geral"><div class="content-superior-pub"><div class="foto-pessoa-pub"></div><p class="nomeDeQuemPublicou">${publicador}</div><div class="content-inferior-pub"><p class="postagem-paragrafo">${p}</p></div><div class="interacao-pub"><div class="comentario-pub">Comentario</div><div class="curtida">Curtir</div></div></div>`
            
            let msg = {
                from: publicador,
                content: p,
                data: data,
                tipo: "text"
            }
            publicacoes.unshift(msg)
            localStorageText(publicacoes)
        }

        function publicarImagem() {
            let publicador = usuarioLogado.nomeUsuario
            let p = document.getElementById("pub-image").value
            if (!p) return alert("Sua publicação está vazia")
            let publicacoes = chamarLocalStorageImg()
            if (!publicacoes) publicacoes = []
            let data = new Date()
            data = data.toString()
            let postagem = document.getElementById("pub")
            postagem.innerHTML += `<div class="dataPub">${data}</div>`
            postagem.innerHTML += `<div class="pub-geral"><div class="content-superior-pub"><div class="foto-pessoa-pub"></div><p class="nomeDeQuemPublicou">${publicador}</div><div class="content-inferior-pub"><img class="postagem-img" src="${p}"></div><div class="interacao-pub"><div class="comentario-pub">Comentario</div><div class="curtida">Curtir</div></div></div>`
            let Img = {
                from: publicador,
                content: p,
                data: data,
                tipo: "img"
            }
            publicacoes.unshift(Img)
            localStorageImg(publicacoes)
        }

        function carregaSugestoesAmigos() {
            let container = document.getElementById("usuariosAdicionar")
            let usuariosAmigos = usuariosAtuais();
            container.innerHTML = ""
            amigosQueJaAdicionou = carregaAmiguinhosBack()
            for (let i = 0; i < usuariosAmigos.length; i++) {
                if (usuarioLogado.nomeUsuario !== usuarios[i].nomeUsuario) {
                    var inexistente = todosAmigosId.indexOf(usuariosAmigos[i].id)
                    console.log(inexistente)
                    if (inexistente === -1) {
                        if (amigosQueJaAdicionou.indexOf(usuarios[i].nomeUsuario) === -1) {
                            container.innerHTML += `<div class="divUser"><img class="fotoUsuariosSujest" src="${usuariosAmigos[i].fotoUsuario}" alt=""><p class="users">${usuariosAmigos[i].nomeUsuario}</p><div class="doButton"><button id="botaoAdicionar" onclick="adicionarAmigo(${usuariosAmigos[i].id} ,'${usuariosAmigos[i].nomeUsuario}' , '${usuariosAmigos.fotoUsuario}')" class="botaoAdicionar">Adicionar</button></div></div>`
                       }
                    }
                }
            }
            console.log(todosAmigosId)
        }
        carregaSugestoesAmigos()


        function adicionarAmigo(ADuser, ADnome , ADfoto) {
            carregaSugestoesAmigos()
            alert(`Adicionando o amigo ${ADnome}`)
            todosAmigos.push(ADnome)
            todosAmigosId.push(ADuser)
            //colocar aqui algo para guardar a imgem do perfil do amigo ADfoto
            var todosSeusAmigos = document.getElementById("seuAmigo")
            todosSeusAmigos.innerHTML = ""
            let amiguinhos = amiguitosFunction()
            amiguinhos.push(ADnome)
            console.log("amiguinhos" + amiguinhos)
            carregaSugestoesAmigos()
            for (let i = 0; i < todosAmigos.length; i++) {
                todosSeusAmigos.innerHTML += `<div class="divAmigo"><p class="seusAmigos" id="caixaAmigoIndividual">${todosAmigos[i]}</p><div class="doButtonAmigo"><button class="conversar" onclick="conversarAmigo()">Conversar</button></div></div>`
            }
            console.log("todos os amigos" + todosAmigos)
            mandaLocalStorageAdd(todosAmigos)

            carregaSugestoesAmigos()
            colocaTamanhoAmigos()
        }

        function carregaAmiguinhos() {
            let amigosAparece = carregaAmiguinhosBack()
            if (!amigosAparece) return
            let amigosTamanho = amigosAparece.length
            let seuAmigoLocal = document.getElementById("seuAmigo")
            for (let i = 0; i < amigosTamanho; i++) {
                seuAmigoLocal.innerHTML += `<div class="divAmigo"><p class="seusAmigos" id="caixaAmigoIndividual">${amigosAparece[i]}</p><div class="doButtonAmigo"><button class="conversar">Conversar</button></div></div>`

            }
        }
        carregaAmiguinhos()

        function Adicionar() {
            usuarios[0].amigos = [1]
        }

        function colocaTamanhoAmigos(){
            var text = document.getElementById("text-seusAmigos")
            var numero = todosAmigos.length
            if(numero <= 0){
            text.innerHTML = `Seus Amigos (${numero})`
            }else return
            
        }
        colocaTamanhoAmigos()

        $(document.body).ready(function () {
            textos = ['Compartilhe fotos', 'Publique textos', 'Conheça pessoas', 'Converse Muito', 'Divirta-se', 'Assista e compartilhe videos', 'RPB Games'];
            $('#textos').text(textos[0]);
            setInterval(function () {
                var indexTexto = Math.floor(Math.random() * textos.length); //Pegará um número aleatório entre 0 e a quantidade de textos;
                $('#textos').text(textos[indexTexto]); //Definirá o texto de acordo com o índice sorteado
            },
                1500); // segundo
        });

        function ModoEscuro() {
            var body = document.getElementById("fundo")
            var publicacaoColor = document.getElementById("geral")
            body.style.backgroundImage = "url('../images/img.png')"
            publicacaoColor.style.backgroundColor = "#143258"
            publicacaoColor.style.border = "solid 10px #00b8ff"
            body.style.transition = "2s"
        }

        function ModoClaro() {
            var body = document.getElementById("fundo")
            var publicacaoColor = document.getElementById("geral")
            body.style.backgroundImage = "url('../images/img2.jpg')"
            body.style.backgroundSize = "1920px 1080px"
            publicacaoColor.style.backgroundColor = "rgb(215 233 255)"
            publicacaoColor.style.border = "solid 10px #00b8ff"
            body.style.transition = "1s"
        }
        carregaSugestoesAmigos();

        function abrirTrocaFoto() {
    var display = document.getElementById("divTrocaFotoPerfil").style.display;
    if (display == "none") {
        document.getElementById("divTrocaFotoPerfil").style.display = 'block';
        document.getElementById("minhaDiv").style.filter = "blur(30px)"
    } else
        document.getElementById('divTrocaFotoPerfil').style.display = 'none';

}

function salvarNovaFotoPerfil() {
    document.getElementById("divTrocaFotoPerfil").style.display = 'none';
    document.getElementById("fundoFalso").style.filter = "none"
    document.getElementById("minhaDiv").style.filter = "none"
    var link = document.getElementById("textNovaFotoPerfil").value
    var usuarioFoto = usuariosAtuais().fotoUsuario
    usuarioFoto = link
    console.log("FOTO AQUI MANO " + usuariosAtuais().fotoUsuario)
    localStorage.setItem("foto", JSON.stringify(usuarioFoto))
}
function fecharAbaNovaFotoPerfil(){
    document.getElementById("divTrocaFotoPerfil").style.display = 'none';
    document.getElementById("fundoFalso").style.filter = "none"
    document.getElementById("minhaDiv").style.filter = "none"
}

function abrirModoDesenvolvedor(){
    var display = document.getElementById("modoDesenvolvedor").style.display;
    if (display == "none") {
        document.getElementById("modoDesenvolvedor").style.display = 'block';
    } else
        document.getElementById('modoDesenvolvedor').style.display = 'none';
}
function fecharModoDesenvolvedor(){
    document.getElementById("modoDesenvolvedor").style.display = 'none';
}

function irPageLoja(){
    window.location.href = "../pages/marketingPlace.html"
}
function irPageConfig(){
    window.location.href = "../pages/configuracoes.html"
}
function salvarModificacoes(){
 var mudaCorCaixaPub = document.getElementById("mudaCorCaixaPub").value 
 var mudaCorPublicacoes = document.getElementById("mudaCorPublicacoes").value                       
 var mudaCorAmigos = document.getElementById("mudaCorAmigos").value
 var mudaCorAmigosIndividual = document.getElementById("mudaCorAmigosIndividual").value
 var mudaCorDentroCaixaPub = document.getElementById("mudaCorDentroCaixaPub").value
 var trocaCorPlanoDeFundo = document.getElementById("trocaCorPlanoDeFundo").value
 var fundo =  document.getElementById("fundo")
 var postagemDentro = document.getElementById("postagemDentro")
 var espacoAmigos = document.getElementById("Amigos") 
 var caixaAmigoIndividual = document.getElementById("caixaAmigoIndividual")    
 var caixaPub = document.getElementById("geral")  

 fundo.style.backgroundColor = `${trocaCorPlanoDeFundo}`
 espacoAmigos.style.backgroundColor = `${mudaCorAmigos}`
 caixaAmigoIndividual.style.backgroundColor = `${mudaCorAmigosIndividual}`
 caixaPub.style.backgroundColor = `${mudaCorCaixaPub}`
 postagemDentro.style.backgroundColor = `${mudaCorDentroCaixaPub}`
}