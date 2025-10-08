let prompt = require('prompt-sync')();

function soma (a, b) {
    let resultado = a + b;
    console.log("A soma de", a, "+", b, "é igual a", resultado);
}
let valor1 = parseInt(prompt('Digite o primeiro valor: '));
let valor2 = parseInt(prompt('Digite o segundo valor: '));

let primeirocalculo = soma(valor1, valor2);
console.log(primeirocalculo);