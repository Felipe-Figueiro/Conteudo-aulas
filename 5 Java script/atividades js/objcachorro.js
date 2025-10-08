let prompt = require('prompt-sync')();

const Cachorro = {
    raca: "Labrador",
    cor: "Amarelo",
    idade: 10,
    latindo: false,
    sentado: false,
    deitado: false,
    rolando: false,

    latir: function() {
        this.latindo = true;
        console.log("Au Au");

    },
    parar: function() {
        this.latindo = false;
        console.log("O cachorro parou de latir");
    },
    sentar: function() {
        this.sentado = true;
        console.log("O cachorro sentou");
    },
    levantar: function() {
        this.sentado = false;
        this.deitado = false;
        this.rolando = false;
        console.log("O cachorro levantou");
    },
    deitar: function() {
        this.deitado = true; 
        console.log("O cachorro deitou");
    },
    rolar: function() {
        this.rolando = true;
        console.log("O cachorro rolou");
    },
    mostrarInfo: function() {
        console.log("Raça: " + this.raca);
        console.log("Cor: " + this.cor);
        console.log("Idade: " + this.idade);
        console.log(`Está latindo? ${this.latindo ? "Sim" : "Não"}`);
        console.log(`Está sentado? ${this.sentado ? "Sim" : "Não"}`);
        console.log(`Está deitado? ${this.deitado ? "Sim" : "Não"}`);
        console.log(`Está rolando? ${this.rolando ? "Sim" : "Não"}`);
    },
};
console.log("Ações disponíveis: latir, parar, sentar, levantar, deitar, rolar");
let ação = prompt("Escolha uma ação: ")
    switch (ação) {
        case "latir":
            Cachorro.latir();
            break;
        case "parar":
            Cachorro.parar();
            break;
        case "sentar":
            Cachorro.sentar();  
            break;
        case "levantar":
            Cachorro.levantar();
            break;
        case "deitar":
            Cachorro.deitar();
            break;
        case "rolar":
            Cachorro.rolar();
            break;
        default:
            console.log("Ação incorreta, tente novamente");
    }
Cachorro.mostrarInfo();
