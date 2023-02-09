function contar() {
    let res = document.getElementById('resultado')

    let cont = 10 

    while (cont >= 1) {
        res.innerHTML += ` ${cont} \u{1F449}`
        cont--
    }
}