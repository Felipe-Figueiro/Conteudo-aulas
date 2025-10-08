let prompt = require('prompt-sync')();

let grausC = parseFloat(prompt("Escolha qual conversão deseja fazer?:   1:°C > °F   |    2:°F > °C "));

switch (grausC) {
    case 1:
        grausC = parseFloat(prompt("Digite a temperatura em Celsius: "));
        let grausF = (grausC * 9/5) + 32;
        console.log(grausC + "°C equivalem a " + grausF.toFixed(2) + "°F.");
        break;
    case 2:
        grausC = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
        let grausC2 = (grausC - 32) * 5/9;
        console.log(grausC + "°F equivalem a " + grausC2.toFixed(2) + "°C.");
        process.exit(0);
    default:
        console.log("Opção inválida. Por favor, escolha 1 ou 2.");
        process.exit(0);
}


