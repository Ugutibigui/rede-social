
function usuariosAtuais(){
    return JSON.parse(localStorage.getItem('usuarios'));
}

function pegaNovoId(){
    let usuarios = usuariosAtuais();
    if(!usuarios || !usuarios?.length) return 0;

    return usuarios.length
}

function criarUsuario(novoUsuario){
    let usuarios = usuariosAtuais();

    
    if(!usuarios || !usuarios?.length) usuarios = [];

    // Se usuario ja existir retornar FALSE
    for(let i = 0;i<usuarios.length;i++){
        if(usuarios[i].nomeUsuario ===  novoUsuario.nomeUsuario) return false;
    }
    
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
}

function chamarLocalStorageVide(){
    return JSON.parse(localStorage.getItem("postsVide"))
}
function chamarLocalStorageText(){
    return JSON.parse(localStorage.getItem("posts"))
}
function chamarLocalStorageImg(){
    return JSON.parse(localStorage.getItem("postsImg"))
}
function localStorageText(publicacoes){
    localStorage.setItem("posts", JSON.stringify(publicacoes))
}
function localStorageImg(publicacoes){
    localStorage.setItem("postsImg", JSON.stringify(publicacoes))
}
function localStorageVide(publicacoes){
    localStorage.setItem("postsVide", JSON.stringify(publicacoes))
}


