function verificar() {
    let mes = window.prompt('Digite o mês que você deseja saber a estação do ano em extenso. Ex: Janeiro')
    let res = document.getElementById('resultado')

    switch (mes.toUpperCase()) {
        case "JANEIRO": case "FEVEREIRO": case "MARÇO":
            res.innerHTML= 'Neste mês, a estação do ano é Verão!'
            break
        case "ABRIL": case "MAIO": case "JUNHO":
            res.innerHTML= 'Neste mês, a estação do ano é Outono!'
            break
        case "JULHO": case "AGOSTO": case "SETEMBRO":
            res.innerHTML= 'Neste mês, a estação do ano é Inverno!'
            break
        case "OUTUBRO": case "NOVEMBRO": case "DEZEMBRO":
            res.innerHTML= 'Neste mês, a estação do ano é Primaveira!'
            break
    }

}