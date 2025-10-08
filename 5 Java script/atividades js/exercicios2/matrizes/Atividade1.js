const LINHAS = 10;
const COLUNAS = 15;
const MAT = [];

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 50) + 1; 
}
for (let i = 0; i < LINHAS; i++) {
    const linha = [];
    for (let j = 0; j < COLUNAS; j++) {
        linha.push(gerarNumeroAleatorio());
    }
    MAT.push(linha);
}

for (let i = 0; i < LINHAS; i++) {
    let somaLinha = 0;
    
    for (let j = 0; j < COLUNAS; j++) {
        somaLinha += MAT[i][j];
    }
    
    const paridade = somaLinha % 2 === 0 ? "PAR" : "ÍMPAR";
    
    console.log(`Linha ${i + 1}: Soma = ${somaLinha} -> ${paridade}`);
}

console.log("\n Colunas);

for (let j = 0; j < COLUNAS; j++) { 
    let somaColuna = 0;

    for (let i = 0; i < LINHAS; i++) {
        somaColuna += MAT[i][j]; 
    }
    const paridade = somaColuna % 2 === 0 ? "PAR" : "ÍMPAR";
    
    console.log(`Coluna ${j + 1}: Soma = ${somaColuna} -> ${paridade}`);
}