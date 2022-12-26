let num = [1, 5, 2, 3, 9]

/*  JEITO ANTIGO
    for (let pos = 0; pos < num.length ; pos++) {
      console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}