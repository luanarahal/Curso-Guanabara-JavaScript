function calcular() {
    var nome = window.prompt('Qual é o seu nome?')
    var nota1 = Number(window.prompt('Qual foi sua primeira nota?'))
    var nota2 = Number(window.prompt('Qual foi sua segunda nota?'))
    var media = (nota1 + nota2) / 2
    var res = document.getElementById('resultado')

    res.innerHTML = `<br>Olá, ${nome}! As suas notas foram: ${nota1} e ${nota2}.<br>`
    res.innerHTML += `A sua média final foi: ${media}<br>`

    if (media > 0 && media < 4) {
        res.innerHTML += 'Estude um pouco mais!'
    } else {
        if (media >= 4 && media <= 7) {
            res.innerHTML += 'Você pode melhorar!'
        }
        else {
            res.innerHTML += 'PARABÉNS!'
        }

    }
}