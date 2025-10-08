const imagens = ["assets/imagem2.jpg", "assets/imagem9.jpg", "assets/imagem10.jpg"]; 
        let indiceAtual = 0;

        function trocarimagem() {

            const imgElemento = document.getElementById("imagem1");
            indiceAtual = (indiceAtual + 1) % imagens.length;
            imgElemento.src = imagens[indiceAtual];
        }