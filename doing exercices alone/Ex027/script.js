function tabuada() {
    let res = document.getElementById('saida')
    let num = Number(document.getElementById('num').value)
    
    res.innerHTML += `<br>Tabuada de ${num}<br>`

    let c = 1

    while (c <= 10) {
        res.innerHTML += ` ${num} x ${c} = ${num * c} <br>`
        c ++
    }

}