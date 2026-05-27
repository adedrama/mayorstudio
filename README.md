# index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>Mayor Studio</title>

  <!-- FONT -->

  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  >

  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
  >

  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  >


  <!-- ICONS -->

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  >

  <link rel="stylesheet" href="style.css">

</head>
<body>


  <!-- MAIN CONTAINER -->

  <div class="page-wrapper">


    <!-- NAVBAR -->

    <header class="navbar">

      <div class="logo">

        <img
          src="https://dummyimage.com/220x80/0f3d36/ffffff&text=mayor+studio"
          alt="logo"
        >

      </div>


      <nav>

        <a href="#">Inicio</a>

        <a href="#productos">
          Productos
          <i class="fa-solid fa-chevron-down"></i>
        </a>

        <a href="#">Empresas</a>

        <a href="#">Personalización</a>

        <a href="#">Nosotros</a>

        <a href="#">Contacto</a>

      </nav>


      <div class="nav-icons">

        <i class="fa-solid fa-magnifying-glass"></i>

        <i class="fa-regular fa-user"></i>


        <div class="cart-icon">

          <i class="fa-solid fa-bag-shopping"></i>

          <span id="cart-count">
            0
          </span>

        </div>

      </div>

    </header>



    <!-- HERO -->

    <section class="hero-section">


      <!-- LEFT -->

      <div class="hero-left">

        <h1>

          Dale identidad
          <br>
          a tu marca con
          <br>

          productos

          <span>
            únicos.
          </span>

        </h1>


        <p>

          Vasos, tazas, termos de acero,
          stickers y más.
          Todo personalizado para ti.

        </p>


        <div class="hero-buttons">

          <button class="primary-btn">
            Ver productos
          </button>


          <button class="secondary-btn">
            Cotiza para tu empresa
          </button>

        </div>

      </div>



      <!-- RIGHT -->

      <div class="hero-right">

        <div class="hero-circle"></div>


        <div class="hero-slider-container">

          <img
            id="heroImage"
            src="https://picsum.photos/900/900?random=1"
            alt="producto"
          >

        </div>

      </div>

    </section>



    <!-- FEATURES -->

    <section class="features-section">


      <div class="feature-card">

        <i class="fa-solid fa-headset"></i>

        <div>

          <h4>
            Atención personalizada
          </h4>

          <p>
            Te asesoramos en todo el proceso
          </p>

        </div>

      </div>



      <div class="feature-divider"></div>



      <div class="feature-card">

        <i class="fa-solid fa-pencil"></i>

        <div>

          <h4>
            Diseños a tu medida
          </h4>

          <p>
            Hacemos realidad tus ideas
          </p>

        </div>

      </div>



      <div class="feature-divider"></div>



      <div class="feature-card">

        <i class="fa-regular fa-star"></i>

        <div>

          <h4>
            Producción de calidad
          </h4>

          <p>
            Materiales duraderos
          </p>

        </div>

      </div>



      <div class="feature-divider"></div>



      <div class="feature-card">

        <i class="fa-solid fa-truck"></i>

        <div>

          <h4>
            Envíos seguros
          </h4>

          <p>
            A todo Argentina
          </p>

        </div>

      </div>


    </section>



    <!-- PRODUCTS -->

    <section
      class="products-section"
      id="productos"
    >

      <h2>
        Lo que podemos personalizar para ti
      </h2>


      <div
        class="products-grid"
        id="productsGrid"
      ></div>

    </section>



    <!-- BENEFITS -->

    <section class="benefits-section">


      <div class="benefit-card">

        <i class="fa-solid fa-gift"></i>

        <div>

          <h4>
            IDEAL PARA EMPRESAS
          </h4>

          <p>
            Regalos corporativos,
            eventos y más
          </p>

        </div>

      </div>


      <div class="benefit-divider"></div>


      <div class="benefit-card">

        <i class="fa-solid fa-tag"></i>

        <div>

          <h4>
            DESCUENTOS POR MAYOREO
          </h4>

          <p>
            Precios especiales
            para tu negocio
          </p>

        </div>

      </div>


      <div class="benefit-divider"></div>


      <div class="benefit-card">

        <i class="fa-regular fa-clipboard"></i>

        <div>

          <h4>
            COTIZÁ FÁCIL Y RÁPIDO
          </h4>

          <p>
            Escribenos y te ayudamos
            con tu proyecto
          </p>

        </div>

      </div>


      <a
        class="whatsapp-circle"
        href="https://wa.me/549111111111"
        target="_blank"
      >

        <i class="fa-brands fa-whatsapp"></i>

      </a>

    </section>



    <!-- FOOTER -->

    <footer>

      <div class="footer-grid">


        <div>

          <img
            class="footer-logo"
            src="https://dummyimage.com/220x80/ffffff/0f3d36&text=mayor+studio"
          >


          <p>
            Productos personalizados
            para personas y empresas.
          </p>


          <div class="social-icons">

            <i class="fa-brands fa-instagram"></i>

            <i class="fa-brands fa-facebook-f"></i>

            <i class="fa-brands fa-tiktok"></i>

          </div>

        </div>



        <div>

          <h4>
            NAVEGACIÓN
          </h4>

          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Empresas</a>
          <a href="#">Personalización</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>

        </div>



        <div>

          <h4>
            CATEGORÍAS
          </h4>

          <a href="#">Vasos y Tazas</a>
          <a href="#">Termos y Botellas</a>
          <a href="#">Stickers</a>
          <a href="#">Anime</a>

        </div>



        <div>

          <h4>
            CONTACTO
          </h4>

          <p>
            +54 9 11 1111 1111
          </p>

          <p>
            hola@mayorstudio.com
          </p>

          <p>
            Buenos Aires, Argentina
          </p>

        </div>


      </div>


      <div class="footer-line"></div>


      <div class="copyright">

        © 2026 Mayor Studio.
        Todos los derechos reservados.

      </div>

    </footer>



    <!-- CARRITO -->

    <div class="cart-panel">

      <div class="cart-header">

        <h3>Carrito</h3>

        <span id="cart-items-count">
          0
        </span>

      </div>


      <div id="cartItems"></div>


      <button onclick="finalizarCompra()">
        Finalizar Compra
      </button>

    </div>


  </div>


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

html{
  scroll-behavior:smooth;
}

body{
  font-family:'Inter',sans-serif;
  background:#efebe3;
  color:#111;
}


.page-wrapper{
  width:100%;
  overflow:hidden;
}


/* NAVBAR */

.navbar{
  width:96%;

  margin:14px auto 0;

  height:88px;

  background:#f9f6f0;

  border-radius:28px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  padding:0 34px;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.03);
}

.logo img{
  height:58px;
  object-fit:contain;
}

nav{
  display:flex;
  align-items:center;
  gap:34px;
}

nav a{
  text-decoration:none;
  color:#1f1f1f;

  font-size:15px;
  font-weight:600;

  display:flex;
  align-items:center;
  gap:8px;
}

nav i{
  font-size:12px;
}

.nav-icons{
  display:flex;
  align-items:center;
  gap:22px;
}

.nav-icons i{
  font-size:20px;
  cursor:pointer;
  color:#1d1d1d;
}

.cart-icon{
  position:relative;
}

#cart-count{
  position:absolute;

  right:-10px;
  top:-8px;

  width:19px;
  height:19px;

  border-radius:50%;

  background:#0e4c43;
  color:white;

  font-size:11px;
  font-weight:700;

  display:flex;
  align-items:center;
  justify-content:center;
}


/* HERO */

.hero-section{
  width:96%;

  margin:18px auto 0;

  background:#f9f6f0;

  border-radius:0 0 32px 32px;

  min-height:720px;

  display:grid;
  grid-template-columns:48% 52%;

  align-items:center;

  padding:40px 50px 50px;

  position:relative;

  overflow:hidden;
}

.hero-left{
  padding-left:10px;
}

.hero-left h1{
  font-size:78px;
  line-height:0.98;

  font-weight:800;

  letter-spacing:-3px;

  margin-bottom:28px;
}

.hero-left span{
  color:#0f5b4d;
}

.hero-left p{
  font-size:27px;

  line-height:1.5;

  color:#5d5d5d;

  max-width:620px;

  margin-bottom:34px;
}

.hero-buttons{
  display:flex;
  gap:18px;
}

.primary-btn{
  border:none;

  background:#0d5a4c;
  color:white;

  height:62px;

  padding:0 34px;

  border-radius:18px;

  font-size:18px;
  font-weight:700;

  cursor:pointer;

  box-shadow:
    0 12px 20px rgba(13,90,76,0.2);
}

.secondary-btn{
  border:1px solid #dad5ce;

  background:#ffffff;

  height:62px;

  padding:0 34px;

  border-radius:18px;

  font-size:18px;
  font-weight:600;

  cursor:pointer;
}

.hero-right{
  position:relative;

  display:flex;
  align-items:center;
  justify-content:center;

  height:100%;
}

.hero-circle{
  position:absolute;

  width:520px;
  height:520px;

  border-radius:50%;

  background:#efe7dc;

  right:90px;
}

.hero-slider-container{
  width:690px;
  height:690px;

  border-radius:40px;

  position:relative;

  overflow:hidden;

  z-index:2;
}

.hero-slider-container img{
  width:100%;
  height:100%;
  object-fit:cover;
}


/* FEATURES */

.features-section{
  width:96%;

  margin:26px auto 0;

  background:#f2ede5;

  border-radius:30px;

  padding:34px 38px;

  display:grid;
  grid-template-columns:
    1fr auto 1fr auto 1fr auto 1fr;

  align-items:center;
}

.feature-card{
  display:flex;
  align-items:flex-start;
  gap:18px;
}

.feature-card i{
  color:#0f5b4d;
  font-size:30px;
}

.feature-card h4{
  font-size:20px;
  margin-bottom:8px;
}

.feature-card p{
  color:#666;
  line-height:1.5;
}

.feature-divider{
  width:1px;
  height:70px;
  background:#d9d1c8;
}


/* PRODUCTS */

.products-section{
  width:96%;

  margin:70px auto;
}

.products-section h2{
  text-align:center;

  font-size:56px;
  font-weight:800;

  margin-bottom:50px;
}

.products-grid{
  display:grid;
  grid-template-columns:
    repeat(4,1fr);

  gap:28px;
}

.product-card{
  background:#f2ede5;

  border-radius:28px;

  overflow:hidden;

  transition:0.35s;
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

  text-align:center;
}

.product-content h3{
  font-size:38px;

  margin-bottom:8px;

  line-height:1;
}

.product-content p{
  color:#666;

  margin-bottom:22px;

  line-height:1.4;

  min-height:52px;
}

.product-controls{
  display:flex;
  gap:10px;

  margin-bottom:16px;
}

.product-controls input{
  width:78px;
  height:54px;

  border:none;

  border-radius:14px;

  background:white;

  text-align:center;

  font-size:17px;
  font-weight:600;
}

.product-controls button{
  flex:1;

  border:none;

  border-radius:14px;

  background:#0d5a4c;
  color:white;

  font-size:16px;
  font-weight:700;

  cursor:pointer;
}

.view-btn{
  width:100%;

  height:56px;

  border:none;

  border-radius:16px;

  background:#0d5a4c;
  color:white;

  font-size:17px;
  font-weight:700;

  cursor:pointer;
}


/* BENEFITS */

.benefits-section{
  width:96%;

  margin:50px auto;

  background:#f2ede5;

  border-radius:30px;

  padding:34px 36px;

  display:grid;
  grid-template-columns:
    1fr auto 1fr auto 1fr auto;

  align-items:center;
}

.benefit-card{
  display:flex;
  align-items:flex-start;
  gap:18px;
}

.benefit-card i{
  color:#0d5a4c;

  font-size:34px;
}

.benefit-card h4{
  font-size:18px;

  margin-bottom:8px;
}

.benefit-card p{
  color:#666;
  line-height:1.5;
}

.benefit-divider{
  width:1px;
  height:80px;
  background:#d8d0c6;
}

.whatsapp-circle{
  width:84px;
  height:84px;

  background:#0d5a4c;
  color:white;

  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content:center;

  text-decoration:none;

  font-size:38px;

  justify-self:end;

  box-shadow:
    0 15px 25px rgba(13,90,76,0.2);
}


/* FOOTER */

footer{
  width:96%;

  margin:0 auto 20px;

  background:
    linear-gradient(
      130deg,
      #042925,
      #0d5a4c
    );

  border-radius:30px;

  padding:60px 50px 30px;

  color:white;
}

.footer-grid{
  display:grid;
  grid-template-columns:
    1.5fr 1fr 1fr 1fr;

  gap:40px;
}

.footer-logo{
  height:62px;

  margin-bottom:18px;
}

.footer-grid p{
  line-height:1.8;

  opacity:0.9;
}

.footer-grid a{
  display:block;

  color:white;

  text-decoration:none;

  margin-bottom:12px;

  opacity:0.9;
}

footer h4{
  margin-bottom:24px;

  font-size:18px;
}

.social-icons{
  display:flex;
  gap:20px;

  margin-top:22px;
}

.social-icons i{
  font-size:24px;
}

.footer-line{
  width:100%;
  height:1px;

  background:rgba(255,255,255,0.2);

  margin:40px 0 20px;
}

.copyright{
  text-align:center;

  opacity:0.8;
}


/* CART */

.cart-panel{
  position:fixed;

  right:20px;
  bottom:20px;

  width:330px;

  background:white;

  border-radius:28px;

  padding:24px;

  box-shadow:
    0 25px 50px rgba(0,0,0,0.15);

  z-index:999;
}

.cart-header{
  display:flex;
  align-items:center;
  justify-content:space-between;

  margin-bottom:18px;
}

#cart-items-count{
  width:34px;
  height:34px;

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

  font-size:17px;
  font-weight:700;

  margin-top:14px;

  cursor:pointer;
}


/* RESPONSIVE */

@media(max-width:1450px){

  .hero-left h1{
    font-size:64px;
  }

  .products-grid{
    grid-template-columns:
      repeat(2,1fr);
  }

}

@media(max-width:1100px){

  .hero-section{
    grid-template-columns:1fr;
  }

  .features-section{
    grid-template-columns:1fr;
    gap:20px;
  }

  .feature-divider{
    display:none;
  }

  .benefits-section{
    grid-template-columns:1fr;
    gap:20px;
  }

  .benefit-divider{
    display:none;
  }

  .footer-grid{
    grid-template-columns:1fr 1fr;
  }

}

@media(max-width:780px){

  .navbar{
    height:auto;

    flex-direction:column;

    gap:18px;

    padding:25px;
  }

  nav{
    flex-wrap:wrap;
    justify-content:center;
  }

  .hero-left h1{
    font-size:46px;
  }

  .hero-left p{
    font-size:20px;
  }

  .hero-section{
    padding:35px 25px 45px;
  }

  .hero-slider-container{
    width:100%;
    height:420px;
  }

  .products-grid{
    grid-template-columns:1fr;
  }

  .products-section h2{
    font-size:38px;
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

  document.getElementById("heroImage").src =
    heroImages[heroIndex];

}, 3500);



// PRODUCTS

const productos = [

  {
    nombre:"Vasos y Tazas",

    descripcion:"Personalizadas",

    imagenes:[

      "https://picsum.photos/600/600?random=11",
      "https://picsum.photos/600/600?random=12",
      "https://picsum.photos/600/600?random=13",
      "https://picsum.photos/600/600?random=14"

    ]
  },


  {
    nombre:"Termos y Botellas",

    descripcion:"De acero",

    imagenes:[

      "https://picsum.photos/600/600?random=21",
      "https://picsum.photos/600/600?random=22",
      "https://picsum.photos/600/600?random=23",
      "https://picsum.photos/600/600?random=24"

    ]
  },


  {
    nombre:"Stickers",

    descripcion:"Personalizados",

    imagenes:[

      "https://picsum.photos/600/600?random=31",
      "https://picsum.photos/600/600?random=32",
      "https://picsum.photos/600/600?random=33",
      "https://picsum.photos/600/600?random=34"

    ]
  },


  {
    nombre:"Anime",

    descripcion:"Productos oficiales y más",

    imagenes:[

      "https://picsum.photos/600/600?random=41",
      "https://picsum.photos/600/600?random=42",
      "https://picsum.photos/600/600?random=43",
      "https://picsum.photos/600/600?random=44"

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

      <h3>
        ${producto.nombre}
      </h3>


      <p>
        ${producto.descripcion}
      </p>


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


  // PRODUCT SLIDER

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

  }, 2400);



  // ADD CART

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



// CART

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


  alert("Producto agregado al carrito");

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


  document.getElementById("cart-items-count")
  .innerText = carrito.length;

}



// WHATSAPP

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


  window.open(

    `https://wa.me/549111111111?text=${mensaje}`,

    "_blank"

  );

}
```
