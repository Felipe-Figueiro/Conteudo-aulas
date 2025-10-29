const carro = {
    modelo: "corolla",
    marca: "toyota",
    ano: 2025,
    cor: "preto"
}
console.log(carro);
const carroJson = JSON.stringify(carro, null, 2);
console.log(carroJson);
const carroObjeto = JSON.parse(carroJson)



/* carro.cor = "prata";
console.log(carro.cor) */