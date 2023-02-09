function calcular() {
    var ano = Number(window.prompt('Em qual ano você nasceu? Ex: 1996'))
    const agora = new Date
    const anoatual = agora.getFullYear()
    var idade = anoatual - ano
    var res = document.getElementById('resultado')

    res.innerHTML = `Quem nasceu em ${ano}, irá completar ${idade} anos em ${anoatual}.`
}