let prompt = require("prompt-sync")();

function media (a, b, c, d, e) {
    let media5 = (a + b + c + d + e) / 5;
    console.log("A média dos 5 números digitados é: ", media5);
}
let numero1 = parseInt(prompt("Digite o primeor número: "));
let numero2 = parseInt(prompt("Digite o segundo número: "));
let numero3 = parseInt(prompt("Digite o terceiro número: "));
let numero4 = parseInt(prompt("Digite o quarto número: "));
let numero5 = parseInt(prompt("Digite o quinto número: "));

let calculo = media(numero1, numero2, numero3, numero4, numero5);
console.log(calculo);