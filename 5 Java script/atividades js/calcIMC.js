let prompt = require("prompt-sync")();

console.log("Calculadora de IMC");

let peso = parseFloat(prompt("Digite seu peso: "));
let altura = parseFloat(prompt("Digite sua altura: "));
let calculo = peso / (altura * altura);

console.log("Seu IMC é: " + calculo.toFixed(2));

switch (true) {
    case calculo < 18.5:
        console.log("Abaixo do peso");
        break;
    case calculo >= 18.5 && calculo < 25:
        console.log("Peso normal");
        break;
    case calculo >= 25 && calculo < 30:
        console.log("Sobrepeso");
        break;
    case calculo >= 30 && calculo < 35:
        console.log("Obesidade grau I");
        break;
    case calculo >= 35 && calculo < 40:
        console.log("Obesidade grau II");
        break;
    case calculo >= 40:
        console.log("Obesidade grau III");
        break;
    default:
        console.log("Valor inválido");
        break;
}