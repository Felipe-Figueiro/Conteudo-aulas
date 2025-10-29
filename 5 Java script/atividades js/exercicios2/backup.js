
const prompt = require('prompt-sync')();


const tamanho = [];
const tabuleiro = [];
const mar =[]
const navrest = []
const tentat = []
const niveis = [{Nível:1, Área:3, Barcos: 2, tentativas:5},
                {Nível:2, Área:5, Barcos: 5, tentativas:12},
                {Nível:3, Área:6, Barcos: 7, tentativas:22},
                {Nível:4, Área:7, Barcos: 8, tentativas:30}
]
const dificuldade = prompt("Bem-vindo à Batalha Naval! Escolha o nível de dificuldade que deseja jogar:", console.table(niveis))
switch (dificuldade){
  case "1": 
  tamanho.push(3), navrest.push(2), tentat.push(5);
  break;
  case "2": 
  tamanho.push(5), navrest.push(5), tentat.push(12);
  break;
  case "3": 
  tamanho.push(6), navrest.push(7), tentat.push(22);
  break;
  case "4": 
  tamanho.push(7), navrest.push(8), tentat.push(30);
  break;
  default: "ta pegando";
}

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
    linha.push("--");
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
let tentativasRestantes = 10;

console.log("Você tem ",tentat, "tentativas para afundar", navrest, "navios.");

while (tentativasRestantes > 0 && naviosRestantes > 0) {

    console.log(`\nTentativas restantes: ${tentativasRestantes}`);


    const linhaDoJogador = parseInt(prompt("Digite a linha (1-5): ")) - 1;
    const colunaDoJogador = parseInt(prompt("Digite a coluna (1-5): ")) - 1;

    if (linhaDoJogador < 0 || linhaDoJogador >= tamanho || colunaDoJogador < 0 || colunaDoJogador >= tamanho) {
        console.log("Coordenadas inválidas. Tente novamente.");
        continue; 
    }


    if (tabuleiro[linhaDoJogador][colunaDoJogador] === "Barco") {
        console.log("BOOM! Você acertou um navio!");
        naviosRestantes--;
        tabuleiro[linhaDoJogador][colunaDoJogador] = 'O'; 
        mar[linhaDoJogador][colunaDoJogador] = 'O';
    } else {
        console.log("Água! Você errou o alvo.");
        tabuleiro[linhaDoJogador][colunaDoJogador] = 'X'; 
        mar[linhaDoJogador][colunaDoJogador] = 'X';
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
for (let i = 0; i < tamanho; i++) {
  const linha = [];
  for (let j = 0; j < tamanho; j++) {
    linha.push(i*10+j+1);const prompt = require('prompt-sync')();

const tamanho = prompt("Escolha o tamanho do tabuleiro (3-7): ");
const tabuleiro = [];
const mar =[]
const navrest = 4


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
    linha.push("--");
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
let tentativasRestantes = 10;

console.log("Bem-vindo à Batalha Naval! Você tem 10 tentativas para afundar", navrest, "navios.");

while (tentativasRestantes > 0 && naviosRestantes > 0) {

    console.log(`\nTentativas restantes: ${tentativasRestantes}`);


    const linhaDoJogador = parseInt(prompt("Digite a linha (1-5): ")) - 1;
    const colunaDoJogador = parseInt(prompt("Digite a coluna (1-5): ")) - 1;

    if (linhaDoJogador < 0 || linhaDoJogador >= tamanho || colunaDoJogador < 0 || colunaDoJogador >= tamanho) {
        console.log("Coordenadas inválidas. Tente novamente.");
        continue; 
    }


    if (tabuleiro[linhaDoJogador][colunaDoJogador] === "Barco") {
        console.log("BOOM! Você acertou um navio!");
        naviosRestantes--;
        tabuleiro[linhaDoJogador][colunaDoJogador] = 'O'; 
        mar[linhaDoJogador][colunaDoJogador] = 'O';
    } else {
        console.log("Água! Você errou o alvo.");
        tabuleiro[linhaDoJogador][colunaDoJogador] = 'X'; 
        mar[linhaDoJogador][colunaDoJogador] = 'X';
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
  }
  tabuleiro.push(linha);
}




console.table (tabuleiro)
