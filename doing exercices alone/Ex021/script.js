function contar() {
    let res = document.getElementById('resultado')

    let cont = 1

    while (cont <= 10){
        res.innerHTML += ` ${cont} \u{1F449}`
        cont++
    }

    res.innerHTML += `\u{1F449}`;
}