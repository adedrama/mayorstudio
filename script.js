// HERO SLIDER

const heroImages = [

  "https://picsum.photos/700/700?random=1",
  "https://picsum.photos/700/700?random=2",
  "https://picsum.photos/700/700?random=3",
  "https://picsum.photos/700/700?random=4"

];

let heroIndex = 0;

setInterval(() => {

  heroIndex++;

  if(heroIndex >= heroImages.length){

    heroIndex = 0;

  }

  document.getElementById("heroImage").src =
    heroImages[heroIndex];

}, 3500);




// PRODUCTOS

const productos = [

  {
    nombre:"Vasos y Tazas",

    descripcion:"Personalizadas",

    imagenes:[

      "https://picsum.photos/500/500?random=11",
      "https://picsum.photos/500/500?random=12",
      "https://picsum.photos/500/500?random=13",
      "https://picsum.photos/500/500?random=14"

    ]
  },

  {
    nombre:"Termos y Botellas",

    descripcion:"De acero",

    imagenes:[

      "https://picsum.photos/500/500?random=21",
      "https://picsum.photos/500/500?random=22",
      "https://picsum.photos/500/500?random=23",
      "https://picsum.photos/500/500?random=24"

    ]
  },

  {
    nombre:"Stickers",

    descripcion:"Personalizados",

    imagenes:[

      "https://picsum.photos/500/500?random=31",
      "https://picsum.photos/500/500?random=32",
      "https://picsum.photos/500/500?random=33",
      "https://picsum.photos/500/500?random=34"

    ]
  },

  {
    nombre:"Anime",

    descripcion:"Productos oficiales y más",

    imagenes:[

      "https://picsum.photos/500/500?random=41",
      "https://picsum.photos/500/500?random=42",
      "https://picsum.photos/500/500?random=43",
      "https://picsum.photos/500/500?random=44"

    ]
  }

];

const productsGrid =
  document.getElementById("productsGrid");

productos.forEach(producto => {

  const card =
    document.createElement("div");

  card.className =
    "product-card";

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

      <button class="view-btn">

        Ver productos

      </button>

    </div>

  `;

  productsGrid.appendChild(card);



  // SLIDER PRODUCTOS

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




  // AGREGAR CARRITO

  card.querySelector(".product-controls button")
  .addEventListener("click", () => {

    const cantidad =
      card.querySelector("input").value;

    agregarAlCarrito(
      producto.nombre,
      cantidad
    );

  });

});




// CARRITO

const carrito = [];

function agregarAlCarrito(
  nombre,
  cantidad
){

  carrito.push({
    nombre,
    cantidad
  });

  renderCarrito();

  alert("Producto agregado");

}



function renderCarrito(){

  const container =
    document.getElementById("cartItems");

  container.innerHTML = "";

  carrito.forEach(item => {

    container.innerHTML += `

      <div class="cart-item">

        ${item.nombre}
        x
        ${item.cantidad}

      </div>

    `;

  });

  document.getElementById("cart-count")
  .innerText = carrito.length;

}




// WHATSAPP

function finalizarCompra(){

  if(carrito.length === 0){

    alert("El carrito está vacío");

    return;

  }

  let mensaje =
    "Hola, quiero realizar esta compra:%0A%0A";

  carrito.forEach(item => {

    mensaje +=
      `• ${item.nombre} x ${item.cantidad}%0A`;

  });

  window.open(

    `https://wa.me/549111111111?text=${mensaje}`,

    "_blank"

  );

}
