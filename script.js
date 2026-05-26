// ==========================
// HERO SLIDER
// ==========================

const heroImages = [

  "https://picsum.photos/1600/700?random=1",
  "https://picsum.photos/1600/700?random=2",
  "https://picsum.photos/1600/700?random=3",
  "https://picsum.photos/1600/700?random=4"

];

let heroIndex = 0;

setInterval(() => {

  heroIndex++;

  if(heroIndex >= heroImages.length){
    heroIndex = 0;
  }

  document.getElementById("heroImage").src =
    heroImages[heroIndex];

}, 4000);


// ==========================
// PRODUCTOS
// ==========================

const productos = [

  {
    categoria:"empresarial",
    nombre:"Kit Empresarial Premium",
    descripcion:
      "Diseño corporativo moderno para empresas.",

    imagenes:[
      "https://picsum.photos/500/500?random=11",
      "https://picsum.photos/500/500?random=12",
      "https://picsum.photos/500/500?random=13",
      "https://picsum.photos/500/500?random=14"
    ]
  },

  {
    categoria:"souvenirs",
    nombre:"Souvenir Buenos Aires",
    descripcion:
      "Recuerdo premium inspirado en Argentina.",

    imagenes:[
      "https://picsum.photos/500/500?random=21",
      "https://picsum.photos/500/500?random=22",
      "https://picsum.photos/500/500?random=23",
      "https://picsum.photos/500/500?random=24"
    ]
  },

  {
    categoria:"randoms",
    nombre:"Caja Random",
    descripcion:
      "Productos variados y exclusivos.",

    imagenes:[
      "https://picsum.photos/500/500?random=31",
      "https://picsum.photos/500/500?random=32",
      "https://picsum.photos/500/500?random=33",
      "https://picsum.photos/500/500?random=34"
    ]
  },

  {
    categoria:"anime",
    nombre:"Figura Anime",
    descripcion:
      "Colección anime edición especial.",

    imagenes:[
      "https://picsum.photos/500/500?random=41",
      "https://picsum.photos/500/500?random=42",
      "https://picsum.photos/500/500?random=43",
      "https://picsum.photos/500/500?random=44"
    ]
  }

];

const categorias = [
  "empresarial",
  "souvenirs",
  "randoms",
  "anime"
];

const container =
  document.getElementById("productos-container");

categorias.forEach(categoria => {

  const section = document.createElement("section");

  section.className = "category";

  section.id = categoria;

  section.innerHTML = `
    <h2 class="category-title">
      ${categoria.toUpperCase()}
    </h2>

    <div class="products-grid"></div>
  `;

  container.appendChild(section);

  const grid =
    section.querySelector(".products-grid");


  productos
    .filter(p => p.categoria === categoria)
    .forEach(producto => {

      const card = document.createElement("div");

      card.className = "product-card";

      card.innerHTML = `

        <div class="product-image">

          <img
            src="${producto.imagenes[0]}"
            class="product-slider"
          >

        </div>

        <div class="product-content">

          <h3>${producto.nombre}</h3>

          <p>${producto.descripcion}</p>

          <div class="product-controls">

            <input
              type="number"
              value="1"
              min="1"
            >

            <button>
              Agregar
            </button>

          </div>

        </div>

      `;

      grid.appendChild(card);

      // SLIDER IMAGENES
      let index = 0;

      const image =
        card.querySelector(".product-slider");

      setInterval(() => {

        index++;

        if(index >= producto.imagenes.length){
          index = 0;
        }

        image.src =
          producto.imagenes[index];

      }, 2500);


      // AGREGAR AL CARRITO
      card.querySelector("button")
      .addEventListener("click", () => {

        const cantidad =
          card.querySelector("input").value;

        agregarAlCarrito(
          producto.nombre,
          cantidad
        );

      });

    });

});


// ==========================
// CARRITO
// ==========================

const carrito = [];

function agregarAlCarrito(nombre,cantidad){

  carrito.push({
    nombre,
    cantidad
  });

  renderCarrito();

  alert("Producto agregado al carrito");

}

function renderCarrito(){

  const container =
    document.getElementById("carrito-items");

  container.innerHTML = "";

  carrito.forEach(item => {

    container.innerHTML += `

      <div class="cart-item">
        ${item.nombre} x ${item.cantidad}
      </div>

    `;

  });

  document.getElementById("cart-count")
    .innerText = carrito.length;

}


// ==========================
// FINALIZAR COMPRA
// ==========================

function finalizarCompra(){

  if(carrito.length === 0){

    alert("Tu carrito está vacío");

    return;
  }

  let mensaje =
    "Hola, quiero realizar esta compra:%0A%0A";

  carrito.forEach(item => {

    mensaje +=
      `• ${item.nombre} x ${item.cantidad}%0A`;

  });

  mensaje +=
    "%0AGracias.";

  alert("Compra confirmada");

  window.open(

    `https://wa.me/5491111111111?text=${mensaje}`,

    "_blank"

  );

}
