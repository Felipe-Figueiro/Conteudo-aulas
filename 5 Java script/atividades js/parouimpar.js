
var prompt = require('prompt-sync')();

var valor =(prompt("Digite um número: "));
let numero = valor % 2;
console.log("O número é:", valor);
if (numero == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}
