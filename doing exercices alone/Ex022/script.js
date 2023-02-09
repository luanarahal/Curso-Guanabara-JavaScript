function contar() {
    let res = document.getElementById('resultado')

    let cont = 1

    while (cont <= 10) {
        if (cont % 2 == 0) {
            res.innerHTML += ` <mark>${cont}</mark> \u{1F449}`
        }
        else {
            res.innerHTML += ` ${cont} \u{1F449}`
        }
        cont++
    }

}