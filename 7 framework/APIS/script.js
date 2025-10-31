fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then (data => {
        const produtos = data.products;
        const produto = produtos[5];
        /** MONTA OS CARDS */
        const card = document.getElementById("produto-card");
        card.innerHTML = `
        <img src= "${produto.thumbnail}" alt="${produto.title}"></img>
        <h2>${produto.title}</h2>
        <p>${produto.description}</p>
        <div class="price">Preço: R$${produto.price}</div>
        <div class="rating">Avaliações: ${produto.rating} ⭐</div> 
        <button class="btn-comprar">Comprar</button>
        `})
        /*console.log(produtos[5].title);
        console.log("R$: "+produtos[5].price);
        console.log("Avaliações: "+produtos[5].rating);
        console.log(produtos[5].description);*/
    
    .catch(error =>{
        console.error("erro ao carregar prodto", error);
        document.getElementById("produto-card").innerHTML = "<p>erro ao carregar produto</p>";

    })