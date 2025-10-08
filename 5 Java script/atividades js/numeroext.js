let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número entre 0 e 20: "));
if (numero < 0 || numero > 20) {
    console.log("Apenas numero entre 0 e 20, execute novamente.");
} else {
    const numerosPorExtenso = [
        "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove",
        "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete",
        "dezoito", "dezenove", "vinte"
    ];
    console.log(`O número ${numero} por extenso é: ${numerosPorExtenso[numero]}`);
}