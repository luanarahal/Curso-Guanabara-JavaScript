function contar() {
    let inicio = document.getElementById('txtinicio').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpasso').value
    let res = document.querySelector('div#res').value

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i, f, p = Number(inicio); Number(fim); Number(passo);

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        } else {
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }


}