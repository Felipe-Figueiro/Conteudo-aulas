const livro = {
    nome: "morellonomicon",
    autor: "morello",
    ano: 2023,
    editora: "editora morello",
    paginas: 300,
    emprestado: false,
    lendo: false,
    guardado: true,

    emprestar: function() {
        this.emprestado = true;
        this.guardado = false;
        console.log("O livro foi emprestado");
    },
    devolver: function() {
        this.emprestado = false;
        this.guardado = true;
        console.log("O livro foi devolvido");
    },
    ler: function() {
        this.lendo = true;
        this.guardado = false;
        console.log("O livro foi lido");
    },
    guardar: function() {
        this.lendo = false;
        this.guardado = true;
        console.log("O livro foi guardado");
    },
    info: function() {
        console.log("Nome: " + this.nome);
        console.log("Autor: " + this.autor);
        console.log("Ano: " + this.ano);
        console.log("Editora: " + this.editora);
        console.log("Páginas: " + this.paginas);
        console.log(`Está emprestado? ${this.emprestado ? "Sim" : "Não"}`);
        console.log(`Está sendo lido? ${this.lendo ? "Sim" : "Não"}`);
        console.log(`Está guardado? ${this.guardado ? "Sim" : "Não"}`);
    }
};
livro.guardar();
livro.info();
