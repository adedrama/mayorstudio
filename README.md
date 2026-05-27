# index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mayor Studio</title>

  <!-- GOOGLE FONT -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- ICONS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

  <!-- CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAVBAR -->
  <header class="navbar">

    <div class="logo">
      <img src="https://dummyimage.com/220x80/0f3d36/ffffff&text=Mayor+Studio" alt="logo">
    </div>

    <nav>
      <a href="#">Inicio</a>
      <a href="#productos">Productos</a>
      <a href="#empresarial">Empresarial</a>
      <a href="#anime">Anime</a>
      <a href="#contacto">Contacto</a>
    </nav>

    <div class="nav-icons">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-user"></i>

      <div class="cart-icon">
        <i class="fa-solid fa-bag-shopping"></i>
        <span id="cart-count">0</span>
      </div>
    </div>

  </header>


  <!-- HERO -->
  <section class="hero">

    <div class="hero-left">

      <h1>
        Dale identidad<br>
        a tu marca con<br>
        productos <span>únicos.</span>
      </h1>

      <p>
        Productos personalizados para empresas,
        emprendimientos y fans del anime.
      </p>

      <div class="hero-buttons">
        <button class="primary-btn">Ver catálogo</button>
        <button class="secondary-btn">Cotizar ahora</button>
      </div>

    </div>


    <div class="hero-right">

      <div class="hero-circle"></div>

      <div class="hero-image-box">
        <img id="heroImage" src="https://picsum.photos/900/900?random=1">
      </div>

    </div>

  </section>


  <!-- FEATURES -->
  <section class="features">

    <div class="feature-card">
      <i class="fa-solid fa-headset"></i>
      <div>
        <h3>Atención personalizada</h3>
        <p>Asesoramiento completo para tu pedido.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="feature-card">
      <i class="fa-solid fa-palette"></i>
      <div>
        <h3>Diseños premium</h3>
        <p>Diseños modernos y profesionales.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="feature-card">
      <i class="fa-solid fa-truck"></i>
      <div>
        <h3>Envíos seguros</h3>
        <p>Realizamos envíos a toda Argentina.</p>
      </div>
    </div>

  </section>


  <!-- PRODUCTS -->
  <section class="products-section" id="productos">

    <div class="section-title">
      <h2>Productos destacados</h2>
      <p>Explora nuestros productos personalizados.</p>
    </div>

    <div class="products-grid" id="productsGrid"></div>

  </section>


  <!-- FOOTER -->
  <footer id="contacto">

    <div class="footer-grid">

      <div>
        <img class="footer-logo" src="https://dummyimage.com/220x80/ffffff/0f3d36&text=Mayor+Studio">

        <p>
          Mayor Studio crea productos personalizados
          modernos para empresas y fans.
        </p>
      </div>


      <div>
        <h4>Navegación</h4>

        <a href="#">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </div>


      <div>
        <h4>Categorías</h4>

        <a href="#">Empresarial</a>
        <a href="#">Souvenirs</a>
        <a href="#">Randoms</a>
        <a href="#">Anime</a>
      </div>


      <div>
        <h4>Contacto</h4>

        <p>+54 9 11 1111 1111</p>
        <p>hola@mayorstudio.com</p>
        <p>Buenos Aires, Argentina</p>
      </div>

    </div>

    <div class="footer-line"></div>

    <div class="copyright">
      © 2026 Mayor Studio. Todos los derechos reservados.
    </div>

  </footer>


  <!-- FLOATING WHATSAPP -->
  <a class="whatsapp-button" href="https://wa.me/549111111111" target="_blank">
    <i class="fa-brands fa-whatsapp"></i>
    <span>Ayuda personalizada</span>
  </a>


  <!-- CART -->
  <div class="cart-panel">

    <div class="cart-header">
      <h3>Carrito</h3>
      <span id="cart-items-count">0</span>
    </div>

    <div id="cartItems"></div>

    <button onclick="finalizarCompra()">
      Finalizar Compra
    </button>

  </div>


  <!-- JS -->
  <script src="script.js"></script>

</body>
</html>
```

---

# style.css

```css
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:'Inter',sans-serif;
  background:#ede7df;
  color:#121212;
  overflow-x:hidden;
}

html{
  scroll-behavior:smooth;
}

img{
  width:100%;
  display:block;
}

/* NAVBAR */

.navbar{
  width:96%;
  height:90px;

  margin:18px auto;
  padding:0 35px;

  background:#f8f4ef;

  border-radius:28px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  box-shadow:0 15px 30px rgba(0,0,0,0.04);
}

.logo img{
  width:180px;
}

nav{
  display:flex;
  gap:35px;
}

nav a{
  text-decoration:none;
  color:#111;

  font-weight:600;
  font-size:15px;
}

.nav-icons{
  display:flex;
  align-items:center;
  gap:24px;
}

.nav-icons i{
  font-size:20px;
  cursor:pointer;
}

.cart-icon{
  position:relative;
}

#cart-count{
  position:absolute;

  top:-8px;
  right:-10px;

  width:20px;
  height:20px;

  border-radius:50%;

  background:#0c5b4d;
  color:white;

  font-size:11px;
  font-weight:700;

  display:flex;
  align-items:center;
  justify-content:center;
}

/* HERO */

.hero{
  width:96%;

  margin:auto;

  background:#f8f4ef;

  border-radius:0 0 35px 35px;

  min-height:760px;

  display:grid;
  grid-template-columns:48% 52%;

  align-items:center;

  padding:60px;

  overflow:hidden;

  position:relative;
}

.hero-left h1{
  font-size:82px;
  line-height:0.95;

  letter-spacing:-4px;

  margin-bottom:28px;

  font-weight:900;
}

.hero-left h1 span{
  color:#0d5a4c;
}

.hero-left p{
  font-size:24px;

  line-height:1.6;

  color:#666;

  max-width:560px;

  margin-bottom:34px;
}

.hero-buttons{
  display:flex;
  gap:18px;
}

.primary-btn{
  height:62px;
  padding:0 34px;

  border:none;
  border-radius:18px;

  background:#0d5a4c;
  color:white;

  font-size:17px;
  font-weight:700;

  cursor:pointer;

  box-shadow:0 14px 30px rgba(13,90,76,0.25);
}

.secondary-btn{
  height:62px;
  padding:0 34px;

  border-radius:18px;

  border:1px solid #ddd;

  background:white;

  font-size:17px;
  font-weight:700;

  cursor:pointer;
}

.hero-right{
  position:relative;

  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-circle{
  position:absolute;

  width:540px;
  height:540px;

  border-radius:50%;

  background:#ece3d8;
}

.hero-image-box{
  width:680px;
  height:680px;

  border-radius:40px;

  overflow:hidden;

  position:relative;

  z-index:2;
}

.hero-image-box img{
  width:100%;
  height:100%;

  object-fit:cover;
}

/* FEATURES */

.features{
  width:96%;

  margin:28px auto;

  background:#f3eee7;

  border-radius:28px;

  padding:35px;

  display:grid;
  grid-template-columns:1fr auto 1fr auto 1fr;

  align-items:center;
}

.feature-card{
  display:flex;
  gap:18px;
}

.feature-card i{
  font-size:32px;
  color:#0d5a4c;
}

.feature-card h3{
  margin-bottom:8px;
}

.feature-card p{
  color:#666;
  line-height:1.5;
}

.divider{
  width:1px;
  height:70px;

  background:#d6d0c8;
}

/* PRODUCTS */

.products-section{
  width:96%;

  margin:80px auto;
}

.section-title{
  text-align:center;

  margin-bottom:55px;
}

.section-title h2{
  font-size:58px;
  margin-bottom:12px;
}

.section-title p{
  font-size:20px;
  color:#666;
}

.products-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);

  gap:28px;
}

.product-card{
  background:#f5f1ea;

  border-radius:30px;

  overflow:hidden;

  transition:0.4s;

  box-shadow:0 10px 25px rgba(0,0,0,0.04);
}

.product-card:hover{
  transform:translateY(-8px);
}

.product-image{
  width:100%;
  height:310px;

  overflow:hidden;
}

.product-image img{
  width:100%;
  height:100%;

  object-fit:cover;
}

.product-content{
  padding:24px;
}

.product-content h3{
  font-size:36px;

  margin-bottom:10px;
}

.product-content p{
  color:#666;

  margin-bottom:22px;

  line-height:1.5;
}

.product-controls{
  display:flex;
  gap:12px;

  margin-bottom:16px;
}

.product-controls input{
  width:80px;
  height:54px;

  border:none;
  border-radius:16px;

  background:white;

  text-align:center;

  font-size:17px;
  font-weight:700;
}

.product-controls button,
.view-btn{
  flex:1;

  height:54px;

  border:none;
  border-radius:16px;

  background:#0d5a4c;
  color:white;

  font-size:16px;
  font-weight:700;

  cursor:pointer;
}

.view-btn{
  width:100%;
}

/* FOOTER */

footer{
  width:96%;

  margin:auto auto 25px;

  padding:60px 50px 30px;

  background:linear-gradient(130deg,#042925,#0d5a4c);

  border-radius:35px;

  color:white;
}

.footer-grid{
  display:grid;
  grid-template-columns:1.5fr 1fr 1fr 1fr;

  gap:40px;
}

.footer-logo{
  width:180px;

  margin-bottom:20px;
}

.footer-grid h4{
  margin-bottom:20px;
}

.footer-grid p,
.footer-grid a{
  color:rgba(255,255,255,0.85);

  line-height:1.9;

  text-decoration:none;

  display:block;
}

.footer-line{
  width:100%;
  height:1px;

  background:rgba(255,255,255,0.2);

  margin:35px 0 20px;
}

.copyright{
  text-align:center;
  opacity:0.8;
}

/* CART */

.cart-panel{
  position:fixed;

  bottom:20px;
  right:20px;

  width:320px;

  background:white;

  border-radius:28px;

  padding:24px;

  box-shadow:0 25px 50px rgba(0,0,0,0.15);

  z-index:999;
}

.cart-header{
  display:flex;
  align-items:center;
  justify-content:space-between;

  margin-bottom:18px;
}

#cart-items-count{
  width:35px;
  height:35px;

  border-radius:50%;

  background:#0d5a4c;
  color:white;

  display:flex;
  align-items:center;
  justify-content:center;

  font-weight:700;
}

.cart-item{
  background:#f5f5f5;

  border-radius:14px;

  padding:14px;

  margin-bottom:10px;
}

.cart-panel button{
  width:100%;
  height:58px;

  border:none;
  border-radius:16px;

  background:#0d5a4c;
  color:white;

  font-size:16px;
  font-weight:700;

  cursor:pointer;

  margin-top:12px;
}

/* WHATSAPP */

.whatsapp-button{
  position:fixed;

  right:24px;
  top:50%;

  transform:translateY(-50%);

  background:#0d5a4c;
  color:white;

  padding:16px 18px;

  border-radius:20px;

  display:flex;
  align-items:center;
  gap:12px;

  text-decoration:none;

  box-shadow:0 15px 30px rgba(13,90,76,0.25);

  z-index:999;
}

.whatsapp-button i{
  font-size:28px;
}

.whatsapp-button span{
  font-weight:700;
}

/* RESPONSIVE */

@media(max-width:1200px){

  .hero{
    grid-template-columns:1fr;
    gap:40px;
  }

  .products-grid{
    grid-template-columns:repeat(2,1fr);
  }

}

@media(max-width:780px){

  .navbar{
    flex-direction:column;
    height:auto;
    padding:25px;
    gap:20px;
  }

  nav{
    flex-wrap:wrap;
    justify-content:center;
  }

  .hero{
    padding:35px 25px;
  }

  .hero-left h1{
    font-size:52px;
  }

  .hero-image-box{
    width:100%;
    height:420px;
  }

  .products-grid{
    grid-template-columns:1fr;
  }

  .features{
    grid-template-columns:1fr;
    gap:25px;
  }

  .divider{
    display:none;
  }

  .footer-grid{
    grid-template-columns:1fr;
  }

  .cart-panel{
    width:92%;
    right:4%;
  }

}
```

---

# script.js

```javascript
// HERO SLIDER

const heroImages = [
  "https://picsum.photos/900/900?random=1",
  "https://picsum.photos/900/900?random=2",
  "https://picsum.photos/900/900?random=3",
  "https://picsum.photos/900/900?random=4"
];

let heroIndex = 0;

setInterval(() => {

  heroIndex++;

  if(heroIndex >= heroImages.length){
    heroIndex = 0;
  }

  document.getElementById("heroImage").src = heroImages[heroIndex];

}, 3500);


// PRODUCTS

const productos = [

  {
    nombre:"Vasos y Tazas",
    descripcion:"Personalizados para empresas y regalos.",

    imagenes:[
      "https://picsum.photos/600/600?random=11",
      "https://picsum.photos/600/600?random=12",
      "https://picsum.photos/600/600?random=13",
      "https://picsum.photos/600/600?random=14"
    ]
  },

  {
    nombre:"Termos",
    descripcion:"Termos premium de acero inoxidable.",

    imagenes:[
      "https://picsum.photos/600/600?random=21",
      "https://picsum.photos/600/600?random=22",
      "https://picsum.photos/600/600?random=23",
      "https://picsum.photos/600/600?random=24"
    ]
  },

  {
    nombre:"Stickers",
    descripcion:"Diseños modernos y personalizados.",

    imagenes:[
      "https://picsum.photos/600/600?random=31",
      "https://picsum.photos/600/600?random=32",
      "https://picsum.photos/600/600?random=33",
      "https://picsum.photos/600/600?random=34"
    ]
  },

  {
    nombre:"Anime",
    descripcion:"Productos inspirados en anime.",

    imagenes:[
      "https://picsum.photos/600/600?random=41",
      "https://picsum.photos/600/600?random=42",
      "https://picsum.photos/600/600?random=43",
      "https://picsum.photos/600/600?random=44"
    ]
  }

];


const productsGrid = document.getElementById("productsGrid");


productos.forEach(producto => {

  const card = document.createElement("div");

  card.className = "product-card";

  card.innerHTML = `

    <div class="product-image">
      <img src="${producto.imagenes[0]}" class="product-slider">
    </div>

    <div class="product-content">

      <h3>${producto.nombre}</h3>

      <p>${producto.descripcion}</p>

      <div class="product-controls">

        <input type="number" value="1" min="1">

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


  // PRODUCT IMAGE SLIDER

  let imageIndex = 0;

  const image = card.querySelector(".product-slider");

  setInterval(() => {

    imageIndex++;

    if(imageIndex >= producto.imagenes.length){
      imageIndex = 0;
    }

    image.src = producto.imagenes[imageIndex];

  }, 2400);


  // ADD TO CART

  card.querySelector(".product-controls button")
  .addEventListener("click", () => {

    const cantidad = card.querySelector("input").value;

    agregarAlCarrito(producto.nombre, cantidad);

  });

});


// CART

const carrito = [];

function agregarAlCarrito(nombre, cantidad){

  carrito.push({
    nombre,
    cantidad
  });

  renderCarrito();

  alert("Producto agregado al carrito");

}


function renderCarrito(){

  const container = document.getElementById("cartItems");

  container.innerHTML = "";

  carrito.forEach(item => {

    container.innerHTML += `

      <div class="cart-item">
        ${item.nombre} x ${item.cantidad}
      </div>

    `;

  });

  document.getElementById("cart-count").innerText = carrito.length;
  document.getElementById("cart-items-count").innerText = carrito.length;

}


// WHATSAPP CHECKOUT

function finalizarCompra(){

  if(carrito.length === 0){

    alert("Tu carrito está vacío");
    return;

  }

  let mensaje = "Hola, quiero realizar esta compra:%0A%0A";

  carrito.forEach(item => {

    mensaje += `• ${item.nombre} x ${item.cantidad}%0A`;

  });

  mensaje += "%0AGracias.";

  window.open(
    `https://wa.me/549111111111?text=${mensaje}`,
    "_blank"
  );

}
```
