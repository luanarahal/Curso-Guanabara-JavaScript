function gerar () {
    var numero = Math.random()
    var res = document.getElementById('resultado')
    
    numero = Math.floor(Math.random() * 100)

    res.innerHTML += `<br><br>O número gerado é ${numero}<br>`
}

function limpar() {
    var res = document.getElementById('resultado')
    res.innerHTML = 'Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100!'
}