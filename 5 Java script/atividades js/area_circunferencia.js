var prompt = require('prompt-sync')();

var opcao =(prompt("Escolha uma opção para calcular Área e Perímetro: 1 - Retângulo. 2 - Quadrado. 3 - Circulo. 4 - Triângulo: "));
switch (opcao) {
    case "1":
        var tamanho1 = parseFloat(prompt("Digite o tamanho de um dos lados do quadrado: "));
        let area1 = tamanho1 * tamanho1;
        let perimetro1 = 4 * tamanho1;
        console.log("      _- RESULTADO -_     ")
        console.log("Área do quadrado: " + area1);
        console.log("Perímetro do quadrado: " + perimetro1);
        break;
        case "2":
        var base2 = parseFloat(prompt("Digite o tamanho da base: "));
        var altura2 = parseFloat(prompt("Digite a altura: "));
        var area2  = base2 * altura2;
        var perimetro2 = 2 * (base2 + altura2);
        console.log("      _- RESULTADO -_     ")
        console.log("Área do retângulo: " + area2);
        console.log("Perímetro do retângulo: " + perimetro2);
        break;
    case "3":
        var raio3 = parseFloat(prompt("Digite o valor do raio: "));
        var area3 = Math.PI * (raio3 * raio3);
        var perimetro3 = Math.PI * (2*raio3);
        console.log("      _- RESULTADO -_     ")
        console.log("Área do círculo: " + area3.toFixed(2));
        console.log("Perímetro do círculo: " + perimetro3.toFixed(2));
        break;
    case "4":
        var lado14 = parseFloat(prompt("Digite o tamanho do lado 1: "));
        var lado24 = parseFloat(prompt("Digite o tamanho do lado 2: "));
        var lado34 = parseFloat(prompt("Digite o tamanho do lado 3: "));
        let Perímetro4 = lado14 + lado24 + lado34;
        console.log("      _- RESULTADO -_     ")
        console.log("Perímetro do triângulo: " + Perímetro4);
        break;  
    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        break;
}