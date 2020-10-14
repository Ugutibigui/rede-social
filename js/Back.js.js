
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





