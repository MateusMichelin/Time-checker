function checar(){

    var mensagem = window.document.getElementById("msg")
    var foto = window.document.getElementById("perfil")
    var data = new Date()
    var hora = data.getHours()

    

    if (hora >= 0 && hora < 12){

        mensagem.innerHTML = `Está de manhã são <strong>${hora}h</strong>`
        foto.src = 'img/manha.jpg'
        document.body.style.background = '#708E70'

    }else if(hora >= 12 && hora <= 18){

        mensagem.innerHTML = `Está de tarde são <strong>${hora}h</strong>`
        foto.src = 'img/tarde.jpg'
        document.body.style.background = '#CE5A02'
    }
    else{
        mensagem.innerHTML = `Está de noite são <strong>${hora}h</strong>`
        foto.src = 'img/noite.jpg'
        document.body.style.background = '#171643'
    }

}   