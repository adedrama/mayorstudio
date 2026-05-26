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
