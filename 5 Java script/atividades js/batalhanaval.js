
const prompt = require('prompt-sync')();

let jogardnv;

do {
const tabuleiro = [];
const mar =[]
const niveis = [{Nível:1, Área:3, Barcos: 2, tentativas:5},
                {Nível:2, Área:5, Barcos: 5, tentativas:18},
                {Nível:3, Área:6, Barcos: 7, tentativas:25},
                {Nível:4, Área:7, Barcos: 8, tentativas:30}
]
console.log ("Bem-vindo à Batalha Naval!          Niveis:")
let dificuldade = prompt("Escolha o nível de dificuldade que deseja jogar: ", console.table(niveis))
while (isNaN(dificuldade))  {
  dificuldade = parseInt(prompt("Você digitou uma opção incorreta! Digite novamente."))
}

const index = parseInt(dificuldade)-1;
const escolhido = niveis[index];
const tamanho = [escolhido.Área];
const navrest = [escolhido.Barcos]
const tentat = [escolhido.tentativas]
for (let i = 0; i < tamanho; i++) {
  const linha = [];
  for (let j = 0; j < tamanho; j++) {
    linha.push("Mar");
  }
  tabuleiro.push(linha);
}

for (let i = 0; i < tamanho; i++) {
  const linha = [];
  for (let j = 0; j < tamanho; j++) {
    linha.push("🟦");
  }
  mar.push(linha);
}

let naviosRestantes = navrest;
while (naviosRestantes > 0) {
  const linhaAleatoria = Math.floor(Math.random() * tamanho);
  const colunaAleatoria = Math.floor(Math.random() * tamanho);

  if (tabuleiro[linhaAleatoria][colunaAleatoria] === "Mar") {
    tabuleiro[linhaAleatoria][colunaAleatoria] = "Barco";
    naviosRestantes--; 
  }
}

naviosRestantes = navrest;
let tentativasRestantes = [escolhido.tentativas];
7
console.log("Você tem ",tentat, "tentativas para afundar", navrest, "navios.");

while (tentativasRestantes > 0 && naviosRestantes > 0) {

    console.log(`\nTentativas restantes: ${tentativasRestantes}`);


    let linhaDoJogador = parseInt(prompt(`Digite a linha (1-${tamanho}): `)) - 1;
      while (isNaN(linhaDoJogador))  {
      linhaDoJogador = parseInt(prompt("Opção incorreta, digite apenas números!"))};

    let colunaDoJogador = parseInt(prompt(`Digite a coluna (1-${tamanho}): `)) - 1;
      while (isNaN(colunaDoJogador))  {
      colunaDoJogador = parseInt(prompt("Opção incorreta, digite apenas números!"))};
    if (linhaDoJogador < 0 || linhaDoJogador >= tamanho || colunaDoJogador < 0 || colunaDoJogador >= tamanho) {
        console.log("Coordenadas inválidas. Tente novamente.");
        continue; 
    };


    if (tabuleiro[linhaDoJogador][colunaDoJogador] === "Barco") {
        console.log("BOOM! Você acertou um navio!");
        naviosRestantes--;
        tabuleiro[linhaDoJogador][colunaDoJogador] = '💥'; 
        mar[linhaDoJogador][colunaDoJogador] = '💥';
    } else {
        console.log("Água! Você errou o alvo.");
        tabuleiro[linhaDoJogador][colunaDoJogador] = '❌'; 
        mar[linhaDoJogador][colunaDoJogador] = '❌';
    }
    console.table(mar)

    tentativasRestantes--;
}


if (naviosRestantes === 0) {
    console.log("\nParabéns! Você afundou todos os navios!");
} else {
    console.log("\nGame Over! Suas tentativas acabaram.");
}

console.log("Tabuleiro Final:");
console.table(tabuleiro);

const perguntajogar = prompt("Deseja jogar novamente? (sim/nao)");
jogardnv = (perguntajogar.toLowerCase() === "sim");

} while (jogardnv);
console.log("Fique a vontade para jogar novamente!");
