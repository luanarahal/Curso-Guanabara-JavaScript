function fatorial () {
    let res = document.getElementById('saida')
    let num = Number(document.getElementById('num').value)
    let c = num
    let fat = 1

    res.innerHTML += `Fatorial de ${num} <br>`

    while (c > 1) {
        res.innerHTML += `${c} x `
        fat *= c
        c --
    }

    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong><br>`
}