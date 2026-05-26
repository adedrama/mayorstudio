<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tienda Online</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- BANNER -->
  <section class="banner-slider">
    <img id="bannerImage" src="assets/banners/banner1.jpg" alt="">
  </section>

  <!-- HEADER -->
  <header>
    <h1>MI TIENDA</h1>

    <nav>
      <a href="#empresarial">Empresarial</a>
      <a href="#souvenirs">Souvenirs</a>
      <a href="#randoms">Randoms</a>
      <a href="#anime">Anime</a>
    </nav>
  </header>

  <!-- PRODUCTOS -->
  <main id="productos-container"></main>

  <!-- CARRITO -->
  <div class="carrito">
    <h2>Carrito</h2>

    <div id="carrito-items"></div>

    <button onclick="finalizarCompra()">
      Finalizar Compra
    </button>
  </div>

  <!-- WHATSAPP FLOTANTE -->
  <a
    class="whatsapp-float"
    href="https://wa.me/5491111111111"
    target="_blank"
  >
    ayuda personalizada
  </a>

  <!-- FOOTER -->
  <footer>
    <h3>Información de la Empresa</h3>

    <p>Nombre Empresa</p>
    <p>Dirección</p>
    <p>Teléfono</p>
    <p>Email</p>
  </footer>

  <script src="script.js"></script>

</body>
</html>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

body{
  background:#f5f5f5;
}

header{
  background:black;
  color:white;
  padding:20px;
  text-align:center;
}

nav{
  margin-top:15px;
}

nav a{
  color:white;
  margin:0 10px;
  text-decoration:none;
  font-weight:bold;
}

.banner-slider{
  width:100%;
  height:350px;
  overflow:hidden;
}

.banner-slider img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.categoria{
  padding:40px 20px;
}

.categoria h2{
  margin-bottom:25px;
}

.productos-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.producto{
  background:white;
  border-radius:15px;
  padding:15px;
  box-shadow:0 0 10px rgba(0,0,0,0.1);
}

.producto img{
  width:100%;
  height:250px;
  object-fit:cover;
  border-radius:10px;
}

.producto h3{
  margin-top:10px;
}

.producto p{
  margin:10px 0;
}

.producto input{
  width:100%;
  padding:10px;
  margin-bottom:10px;
}

.producto button{
  width:100%;
  padding:12px;
  background:black;
  color:white;
  border:none;
  border-radius:10px;
  cursor:pointer;
}

.carrito{
  position:fixed;
  right:20px;
  bottom:100px;
  width:300px;
  background:white;
  padding:20px;
  border-radius:15px;
  box-shadow:0 0 15px rgba(0,0,0,0.2);
}

.whatsapp-float{
  position:fixed;
  right:20px;
  bottom:20px;
  background:#25D366;
  color:white;
  padding:15px 20px;
  border-radius:50px;
  text-decoration:none;
  font-weight:bold;
}

footer{
  background:#111;
  color:white;
  text-align:center;
  padding:40px 20px;
  margin-top:50px;
}

// =====================
// BANNERS
// =====================

const banners = [
  "assets/banners/banner1.jpg",
  "assets/banners/banner2.jpg",
  "assets/banners/banner3.jpg",
  "assets/banners/banner4.jpg"
];

let bannerIndex = 0;

setInterval(() => {
  bannerIndex++;

  if(bannerIndex >= banners.length){
    bannerIndex = 0;
  }

  document.getElementById("bannerImage").src = banners[bannerIndex];

}, 3000);


// =====================
// PRODUCTOS
// =====================

const productos = [

  {
    categoria: "empresarial",
    nombre: "Producto Empresarial",
    descripcion: "Descripción del producto",
    imagenes: [
      "assets/productos/empresarial1-1.jpg",
      "assets/productos/empresarial1-2.jpg",
      "assets/productos/empresarial1-3.jpg",
      "assets/productos/empresarial1-4.jpg"
    ]
  },

  {
    categoria: "souvenirs",
    nombre: "Souvenir Argentina",
    descripcion: "Descripción souvenir",
    imagenes: [
      "assets/productos/souvenir1-1.jpg",
      "assets/productos/souvenir1-2.jpg",
      "assets/productos/souvenir1-3.jpg",
      "assets/productos/souvenir1-4.jpg"
    ]
  },

  {
    categoria: "randoms",
    nombre: "Producto Random",
    descripcion: "Descripción random",
    imagenes: [
      "assets/productos/random1-1.jpg",
      "assets/productos/random1-2.jpg",
      "assets/productos/random1-3.jpg",
      "assets/productos/random1-4.jpg"
    ]
  },

  {
    categoria: "anime",
    nombre: "Producto Anime",
    descripcion: "Descripción anime",
    imagenes: [
      "assets/productos/anime1-1.jpg",
      "assets/productos/anime1-2.jpg",
      "assets/productos/anime1-3.jpg",
      "assets/productos/anime1-4.jpg"
    ]
  }

];

const categorias = [
  "empresarial",
  "souvenirs",
  "randoms",
  "anime"
];

const container = document.getElementById("productos-container");

categorias.forEach(categoria => {

  const section = document.createElement("section");

  section.classList.add("categoria");

  section.id = categoria;

  section.innerHTML = `
    <h2>${categoria.toUpperCase()}</h2>
    <div class="productos-grid"></div>
  `;

  container.appendChild(section);

  const grid = section.querySelector(".productos-grid");

  productos
    .filter(p => p.categoria === categoria)
    .forEach(producto => {

      const div = document.createElement("div");

      div.classList.add("producto");

      div.innerHTML = `
        <img src="${producto.imagenes[0]}" class="producto-img">

        <h3>${producto.nombre}</h3>

        <p>${producto.descripcion}</p>

        <input type="number" min="1" value="1">

        <button>Agregar al carrito</button>
      `;

      grid.appendChild(div);

      // CAMBIO AUTOMATICO IMAGENES
      let imgIndex = 0;

      const img = div.querySelector(".producto-img");

      setInterval(() => {

        imgIndex++;

        if(imgIndex >= producto.imagenes.length){
          imgIndex = 0;
        }

        img.src = producto.imagenes[imgIndex];

      }, 2000);

      // CARRITO
      const button = div.querySelector("button");

      button.addEventListener("click", () => {

        const cantidad = div.querySelector("input").value;

        agregarAlCarrito(producto.nombre, cantidad);

      });

    });

});


// =====================
// CARRITO
// =====================

const carrito = [];

function agregarAlCarrito(nombre, cantidad){

  carrito.push({
    nombre,
    cantidad
  });

  renderCarrito();

  alert("Producto agregado");
}

function renderCarrito(){

  const container = document.getElementById("carrito-items");

  container.innerHTML = "";

  carrito.forEach(item => {

    container.innerHTML += `
      <p>
        ${item.nombre} x ${item.cantidad}
      </p>
    `;
  });

}

function finalizarCompra(){

  if(carrito.length === 0){
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola, quiero comprar:%0A%0A";

  carrito.forEach(item => {

    mensaje += `• ${item.nombre} x ${item.cantidad}%0A`;

  });

  alert("Compra confirmada");

  window.open(
    `https://wa.me/5491111111111?text=${mensaje}`,
    "_blank"
  );

}

// =====================
// BANNERS
// =====================

const banners = [
  "assets/banners/banner1.jpg",
  "assets/banners/banner2.jpg",
  "assets/banners/banner3.jpg",
  "assets/banners/banner4.jpg"
];

let bannerIndex = 0;

setInterval(() => {
  bannerIndex++;

  if(bannerIndex >= banners.length){
    bannerIndex = 0;
  }

  document.getElementById("bannerImage").src = banners[bannerIndex];

}, 3000);


// =====================
// PRODUCTOS
// =====================

const productos = [

  {
    categoria: "empresarial",
    nombre: "Producto Empresarial",
    descripcion: "Descripción del producto",
    imagenes: [
      "assets/productos/empresarial1-1.jpg",
      "assets/productos/empresarial1-2.jpg",
      "assets/productos/empresarial1-3.jpg",
      "assets/productos/empresarial1-4.jpg"
    ]
  },

  {
    categoria: "souvenirs",
    nombre: "Souvenir Argentina",
    descripcion: "Descripción souvenir",
    imagenes: [
      "assets/productos/souvenir1-1.jpg",
      "assets/productos/souvenir1-2.jpg",
      "assets/productos/souvenir1-3.jpg",
      "assets/productos/souvenir1-4.jpg"
    ]
  },

  {
    categoria: "randoms",
    nombre: "Producto Random",
    descripcion: "Descripción random",
    imagenes: [
      "assets/productos/random1-1.jpg",
      "assets/productos/random1-2.jpg",
      "assets/productos/random1-3.jpg",
      "assets/productos/random1-4.jpg"
    ]
  },

  {
    categoria: "anime",
    nombre: "Producto Anime",
    descripcion: "Descripción anime",
    imagenes: [
      "assets/productos/anime1-1.jpg",
      "assets/productos/anime1-2.jpg",
      "assets/productos/anime1-3.jpg",
      "assets/productos/anime1-4.jpg"
    ]
  }

];

const categorias = [
  "empresarial",
  "souvenirs",
  "randoms",
  "anime"
];

const container = document.getElementById("productos-container");

categorias.forEach(categoria => {

  const section = document.createElement("section");

  section.classList.add("categoria");

  section.id = categoria;

  section.innerHTML = `
    <h2>${categoria.toUpperCase()}</h2>
    <div class="productos-grid"></div>
  `;

  container.appendChild(section);

  const grid = section.querySelector(".productos-grid");

  productos
    .filter(p => p.categoria === categoria)
    .forEach(producto => {

      const div = document.createElement("div");

      div.classList.add("producto");

      div.innerHTML = `
        <img src="${producto.imagenes[0]}" class="producto-img">

        <h3>${producto.nombre}</h3>

        <p>${producto.descripcion}</p>

        <input type="number" min="1" value="1">

        <button>Agregar al carrito</button>
      `;

      grid.appendChild(div);

      // CAMBIO AUTOMATICO IMAGENES
      let imgIndex = 0;

      const img = div.querySelector(".producto-img");

      setInterval(() => {

        imgIndex++;

        if(imgIndex >= producto.imagenes.length){
          imgIndex = 0;
        }

        img.src = producto.imagenes[imgIndex];

      }, 2000);

      // CARRITO
      const button = div.querySelector("button");

      button.addEventListener("click", () => {

        const cantidad = div.querySelector("input").value;

        agregarAlCarrito(producto.nombre, cantidad);

      });

    });

});


// =====================
// CARRITO
// =====================

const carrito = [];

function agregarAlCarrito(nombre, cantidad){

  carrito.push({
    nombre,
    cantidad
  });

  renderCarrito();

  alert("Producto agregado");
}

function renderCarrito(){

  const container = document.getElementById("carrito-items");

  container.innerHTML = "";

  carrito.forEach(item => {

    container.innerHTML += `
      <p>
        ${item.nombre} x ${item.cantidad}
      </p>
    `;
  });

}

function finalizarCompra(){

  if(carrito.length === 0){
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola, quiero comprar:%0A%0A";

  carrito.forEach(item => {

    mensaje += `• ${item.nombre} x ${item.cantidad}%0A`;

  });

  alert("Compra confirmada");

  window.open(
    `https://wa.me/5491111111111?text=${mensaje}`,
    "_blank"
  );

}

{
  categoria: "anime",
  nombre: "Producto Anime",
  descripcion: "Descripción anime",
  imagenes: [
    "assets/productos/anime1-1.jpg",
    "assets/productos/anime1-2.jpg",
    "assets/productos/anime1-3.jpg",
    "assets/productos/anime1-4.jpg"
  ]
}
