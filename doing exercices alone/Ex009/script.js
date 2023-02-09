let contador = 0;
let res = document.getElementById('resultado')

function contar () {
    contador ++
    res.innerHTML = `<p>O contador está com ${contador} cliques.`
}

function zerar () {
    contador = 0 
    res.innerHTML = null
}
