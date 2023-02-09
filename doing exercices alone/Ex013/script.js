function verificar() {
    let num1 = Number(window.prompt('Digite um número'))
    let num2 = Number(window.prompt('Digite outro número'))
    let res = document.getElementById('resultado')

    res.innerHTML += `<br>Os números digitados foram <mark>${num1}</mark> e <mark>${num2}</mark><br>`

    if (num1 != num2) {
        if (num1 > num2) {
            res.innerHTML += `<br>O número ${num1} é maior que o número ${num2}<br>`;
        } else {
            res.innerHTML += `<br>O número ${num2} é maior que o número ${num1}<br>`;
        }
    } else {
        res.innerHTML += '<br>Os números são iguais!'
    }

}