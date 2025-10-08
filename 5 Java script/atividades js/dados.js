
let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

console.log(`Primeiro dado: ${dado1}`);
console.log(`Segundo dado: ${dado2}`);
console.log(`O vencedor foi: ${dado1 > dado2 ? "Primeiro dado" : dado2 > dado1 ? "Segundo dado" : "Empate"}`);