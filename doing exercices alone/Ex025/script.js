function contagem() {
    let res = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)

    res.innerHTML += `Contando de 0 até ${num}`

    let cont = 0

    while (cont <= num) {
        res.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
}