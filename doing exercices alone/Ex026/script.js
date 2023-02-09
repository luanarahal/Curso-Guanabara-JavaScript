function contagem() {
    let res = document.getElementById('saida')
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)
    let cont 

    res.innerText += `Contando de ${num1} até ${num2}...`

    if (num1 < num2) {
        cont = num1
        while (cont <= num2) {
            res.innerHTML += ` ${cont} &#x1F449;`
            cont ++
        }
    } else {
        if (num2 < num1) {
            cont = num1
            while (cont >= num2) {
                res.innerHTML += ` ${cont} &#x1F449;`
                cont --
            }
        } else {
            res.innerHTML += `Não é possível contar, pois os números são iguais`
        }
    } 
}