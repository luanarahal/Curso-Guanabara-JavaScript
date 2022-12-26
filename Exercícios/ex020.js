let num = [5, 9, 6, 7]
//num[4] = 9 ADICIONANDO O NUMERO 9 NA POSIÇÃO 4
//num.push(99) ADICIONANDO O NUMERO 99 NA ULTIMA POSICAO
//num.sort() COLOCANDO EM ORDEM CRESCENTE
console.log(`O nosso vetor é o ${num} `);
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let pos = num.indexOf(10)

if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


