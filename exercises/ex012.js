var idade = 50;
console.log(`Você tem ${idade} anos!`);
if (idade < 16) {
    console.log("Você ainda não vota!");
} else if (idade < 18 || idade > 65) {
    console.log("Seu voto é opcional!")
} else {
    console.log("Seu voto é obrigatório!");
}

/*

Outra maneira de fazer, com o código mais longo (menos usual)

var idade = 17;
if (idade < 16)
{
    console.log("Você ainda não vota!");
}
else
{
    if (idade >= 16 && idade < 18) { // Idade >= 16 é desnecessário!! Pode tirar se quiser!
        console.log("Seu voto é opcional!");
    } else {
        console.log("Sua obrigação é votar!");
    }
    
}

*/