let prompt = require('prompt-sync')();


let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;


switch (prompt("Digite a operação desejada (soma, subtracao, multiplicacao ou divisao): ")) {
    case 'soma':
       console.log (soma)
        break;
    case 'subtracao':
        console.log(subtracao);
        break;
    case 'multiplicacao':
        console.log(multiplicacao);
        break;
    case 'divisao':
        console.log(divisao);
        break;
    default:
        console.log("operação inválida");
        break; 
}


