// Criando um objeto chamado "carro"
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  ligado: false,

  // Método para ligar o carro
  ligar: function () {
    this.ligado = true;
    console.log("O carro foi ligado.");
  },

  // Método para desligar o carro
  desligar: function () {
    this.ligado = false;
    console.log("O carro foi desligado.");
  },

  // Método para mostrar as informações do carro
  mostrarInfo: function () {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Está ligado? ${this.ligado ? "Sim" : "Não"}`);
  }
};
		
// Usando o objeto
carro.mostrarInfo();