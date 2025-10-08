const prompt = require('prompt-sync')();

let texto = prompt("Digite um texto que deseja inverter: ");

let textodiv = texto.split('');
console.log('texto dividido com split: '+ textodiv);
let textoinv = textodiv.reverse();
console.log('caracteres invertidos com reverse: ' + textoinv);
let textojunto = textoinv.join('');
console.log(`texto pronto invertido: ${textojunto}`);
