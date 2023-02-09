function iniciar() {
    var valor1 = Number(window.prompt('Digite um número'))
    var valor2 = Number(window.prompt('Digite um outro número'))
    var result = Number(window.prompt(`Valores informados ${valor1} e ${valor2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    var res = document.getElementById('resultado')
    var soma = valor1 + valor2 
    var sub = valor1 - valor2
    var mult = valor1 * valor2
    var div = valor1 / valor2

    if (result == 1) {
        res.innerHTML = `A soma de ${valor1} + ${valor2} = ${soma}`
    } 
    else {
        if (result == 2) {
            res.innerHTML = `A subtração de ${valor1} - ${valor2} = ${sub}`
        } else {
            if (result == 3) {
                res.innerHTML = `A multiplicação de ${valor1} * ${valor2} = ${mult}`
            }
            else {
                if (result == 4) {
                    res.innerHTML = `A divisão de ${valor1} / ${valor2} = ${mult}`
                }
                
            }
        }
        
    }
}