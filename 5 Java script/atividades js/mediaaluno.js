let prompt = require("prompt-sync")();

console.log("Digite suas notas para saber sua média e se você foi aprovado ou reprovado.");

let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));
let nota3 = parseFloat(prompt("Digite a nota da terceira avaliação: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`Você está aprovado com a média ${media.toFixed(2)}.`);
} else {
    console.log(`Você está reprovado com a média ${media.toFixed(2)}.`);
}

if (media < 6.75 || media > 6.99) 
    {console.log("Infelizmente você não pode fazer recuperação.");}
else 
    {console.log("Você ainda pode fazer recuperação.");}
