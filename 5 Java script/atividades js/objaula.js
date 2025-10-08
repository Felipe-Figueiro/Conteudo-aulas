const joao = {
    nome: 'João',
    cpf: '123.456.789-00',
    idade: 20,
    nascimento: '01/01/2005',
    etnia: 'pardo',
    peso: 82,
    altura: 1.80,
    nacionalidade: 'brasileiro',
    trabalhando: false,
    estudando: false,
    correndo: false,
    nas_compras: false,


    trabalhar:function () {
        this.trabalhando = true;
        console.log("João foi trabalhar");
    },

    descansar:function () {
        this.trabalhando = false;
        console.log("João voltou do trabalho");
    },
    estudar:function () {
        this.estudando = true;
        console.log("João foi para a escola");
    },
    parar_de_estudar:function () {
        this.estudando = false;
        console.log("João voltou da escola");
    },
    correr:function () {
        this.correndo = true;
        console.log("João foi correr");
    },
    parar_de_correr:function () {
        this.correndo = false;
        console.log("João parou de correr");
    },
    ir_as_compras:function () {
        this.nas_compras = true;
        console.log("Foi as compras");
    },
    voltar_das_compras:function () {
        this.nas_compras = false;
        console.log("Voltou das compras");
    },

    mostrarInfo:function () {
        console.log ("nome: " + this.nome )
        console.log (", cpf: " + this.cpf)
        console.log (", idade: " + this.idade)
        console.log (", nascimento: " + this.nascimento)
        console.log (", etnia: " + this.etnia)
        console.log (", peso: " + this.peso)
        console.log (", altura: " + this.altura)
        console.log (", nacionalidade: " + this.nacionalidade)
        console.log(`Está trabalhando? ${this.trabalhando ? "Sim" : "Não"}`);
        console.log(`Está estudando? ${this.estudando ? "Sim" : "Não"}`);
        console.log(`Está correndo? ${this.correndo ? "Sim" : "Não"}`);
        console.log(`Está fazendo compras? ${this.nas_compras ? "Sim" : "Não"}`);
    }
};
joao.mostrarInfo();
joao.ir_as_compras();
/*
joao.mostrarInfo();
joao.trabalhar();
joao.descansar();
joao.estudar();
joao.parar_de_estudar();
joao.correr();
joao.parar_de_correr();
joao.ir_as_compras();
joao.voltar_das_compras();
*/