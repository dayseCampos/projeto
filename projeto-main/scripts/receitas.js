//array com os objetos dentro (receita)
let receitas = {
    data: [
      {
        receitaNome: "Bolo de chocolate",
        categoria: "Bolos",
        data: "22/05/2023",
        ref: "bolo-chocolate.html",
        imagem: "assets/img/receitas/bolo-chocolate2.jpg",
      },
      {
        receitaNome: "Milkshake de morango",
        categoria: "Bebidas",
        data: "22/05/2023",
        ref: "milkshake-morango.html",
        imagem: "assets/img/receitas/milkshake-receitas.jpg",
      },
      {
        receitaNome: "Bolo de morango",
        categoria: "Bolos",
        data: "20/03/2023",
        imagem: "assets/img/receitas/bolo-de-morango.jpg",
      },
      {
        receitaNome: "Torta de limão",
        categoria: "Tortas",
        data: "22/05/2023",
        ref: "torta-limao.html",
        imagem: "assets/img/receitas/torta-limao.jpg",
      },
      {
        receitaNome: "Muffins de banana",
        categoria: "Outros",
        data: "22/05/2023",
        ref: "muffins.html",
        imagem: "assets/img/receitas/muffin.jpg",
      },
      {
        receitaNome: "Torta de chocolate",
        categoria: "Tortas",
        data: "05/02/2022",
        imagem: "assets/img/receitas/torta-chocolate.jpg",
      },
      {
        receitaNome: "Cupcake de baunilha",
        categoria: "Outros",
        data: "05/06/2026",
        imagem: "assets/img/receitas/cupcake-receitas.jpg",
      },
      {
        receitaNome: "Pink lemonade",
        categoria: "Bebidas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/limonada-rosa.jpg",
      },
      {
        receitaNome: "Torta de maçã",
        categoria: "Tortas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/torta-de-maca.jpg",
      },
      {
        receitaNome: "Bolo de laranja",
        categoria: "Bolos",
        data: "22/05/2023",
        imagem: "assets/img/receitas/bolo-de-laranja.jpg",
      },
      {
        receitaNome: "Torta holandesa",
        categoria: "Tortas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/torta-holandesa.jpg",
      },
      {
        receitaNome: "Chocolate quente",
        categoria: "Bebidas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/chocolate-quente.jpg",
      },
      {
        receitaNome: "Donuts",
        categoria: "Outros",
        data: "22/05/2023",
        imagem: "assets/img/receitas/donuts.jpg",
      },
      {
        receitaNome: "Brownie",
        categoria: "Outros",
        data: "22/05/2023",
        imagem: "assets/img/receitas/brownie.jpg",
      },
      {
        receitaNome: "Limonada",
        categoria: "Bebidas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/limonada.jpg",
      },
      {
        receitaNome: "Banana Split",
        categoria: "Bolos",
        data: "22/05/2023",
        imagem: "assets/img/receitas/banana-split.jpg",
      },
      {
        receitaNome: "Cheesecake",
        categoria: "Tortas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/cheesecake.jpg",
      },
      {
        receitaNome: "Cookies",
        categoria: "Outros",
        data: "22/05/2023",
        imagem: "assets/img/receitas/cookies.jpg",
      },
      {
        receitaNome: "Smoothie de açaí e banana",
        categoria: "Bebidas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/smoothie.jpg",
      },
      {
        receitaNome: "Bolo de cenoura",
        categoria: "Bolos",
        data: "22/05/2023",
        imagem: "assets/img/receitas/bolo-de-cenoura.jpg",
      },
      {
        receitaNome: "Torta de banana",
        categoria: "Tortas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/torta-de-banana.jpg",
      },
      {
        receitaNome: "Bolo de coco",
        categoria: "Bolos",
        data: "22/05/2023",
        imagem: "assets/img/receitas/bolo-de-coco.jpg",
      },
      {
        receitaNome: "Pudim",
        categoria: "Outros",
        data: "22/05/2023",
        imagem: "assets/img/receitas/pudim.jpg",
      },
      {
        receitaNome: "Bolo de fubá",
        categoria: "Bolos",
        data: "22/05/2023",
        imagem: "assets/img/receitas/bolo-fuba.jpg",
      },
      {
        receitaNome: "Mocha frapuccino",
        categoria: "Bebidas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/mocha.jpg",
      },
      {
        receitaNome: "Banoffee",
        categoria: "Tortas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/banoffee.jpg",
      },
      {
        receitaNome: "Torta de morango",
        categoria: "Tortas",
        data: "22/05/2023",
        imagem: "assets/img/receitas/torta-de-morango.jpg",
      },
    ],
  };
  
  //inicio do loop para buscar as receitas
  for (let i of receitas.data) {
    //criar card
    let card = document.createElement("div");

    //card deve ter uma categoria e ficar escondido inicialmente
    card.classList.add("card", i.categoria, "hide");

    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imagem-container");

    //img tag
    let imagem = document.createElement("img");
    imagem.setAttribute("src", i.imagem);
    imgContainer.appendChild(imagem);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //nome receita
    let name = document.createElement("a");
    name.href = i.ref;
    name.classList.add("nome-receita");
    name.innerText = i.receitaNome.toUpperCase();
    container.appendChild(name);

    //a data
    let data = document.createElement("h6");
    data.innerText = i.data;
    container.appendChild(data);
  
    card.appendChild(container);
    document.getElementById("receitas").appendChild(card);
  }
  
  //parametro passado pelo botao (parametro igual a categoria)
  function filtrarReceitas(value) {
    //button class code
    let buttons = document.querySelectorAll(".btn-valor");
    buttons.forEach((button) => {
      //checa se valor é igual ao innertext
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //seleciona todos os cards
    let elements = document.querySelectorAll(".card");
    //loop entre todos os cards
    elements.forEach((element) => {
      //mostra todos os cards ao clicar no "todos"
      if (value == "todos") {
        element.classList.remove("hide");
      } else {
        //checa se o elemento contem categoria
        if (element.classList.contains(value)) {
          //mostra o elemento baseado na categoria
          element.classList.remove("hide");
        } else {
          //esconde outros elementos
          element.classList.add("hide");
        }
      }
    });
  }
  
  //btn buscar
  document.getElementById("buscar").addEventListener("click", () => {
    //inicializadores
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".nome-receita");
    let cards = document.querySelectorAll(".card");
  
    //loopa entre todos os elementos
    elements.forEach((element, index) => {
      //checa se o texto inclui valor no search
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //mostra cards que combinam
        cards[index].classList.remove("hide");
      } else {
        //esconde outros
        cards[index].classList.add("hide");
      }
    });
  });
  
  //no começo mostra todas as receitas
  window.onload = () => {
    filtrarReceitas("todos");
  };