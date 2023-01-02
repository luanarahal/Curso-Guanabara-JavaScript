function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 22;
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/fotodia.png';
        document.body.style.background = '#b0ab2a';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#728d94';
    } else {
        //BOA NOITE
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#202b2f';
    }
}
