let prompt = require('prompt-sync')();

let numero= parseFloat(prompt("Digite um número para saber se é primo: "));
switch (numero){
    case 0:
        console.log("O número não é primo");
    break;
    case 1:
        console.log("O número não é primo");
    break;
    case 2:
        console.log("O número é primo");
    break;
    default:
        let calculo1= numero % 2;
        if (calculo1 == 0){
            console.log("O número não é primo");
        }else{
            console.log("O número é primo");
        }
    break;
}