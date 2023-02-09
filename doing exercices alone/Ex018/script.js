let res = document.querySelector('section#resultado')
let num = 0
let palpite = 0

function sortear() {
    /*var num = Math.random()
    num = Math.floor(Math.random() * 10)
    res.innerHTML += `O número que eu pensei é ${num}<br><br>`;*/
    let min = 1
    let max = 10
    let dif = max - min
    let aleatorio = Math.randow()
    num = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    palpite = Number(window.prompt('Qual é o seu palpite? Obs: Número entre 1 a 10'))

    if (num < palpite) {
        res.innerHTML += `Você falou ${palpite}. O meu número é MENOR!<br><br>`;
    } else if (num > palpite) {
        res.innerHTML += `Você falou ${palpite}. O meu número é MAIOR!<br><br>`;
    } else if (num == palpite) {
        res.innerHTML += 'Você acertou!!! Parabéns!!!<br><br>';
    }
}