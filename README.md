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
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
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


  <!-- NAVBAR -->

  <header class="navbar">

    <div class="logo">

      <img
        src="https://dummyimage.com/220x80/0d3b36/ffffff&text=mayor+studio"
      >

    </div>


    <nav>

      <a href="#">Inicio</a>

      <a href="#productos">
        Productos
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

        <span id="cart-count">0</span>

      </div>

    </div>

  </header>



  <!-- HERO -->

  <section class="hero">

    <div class="hero-left">

      <h1>

        Dale identidad
        <br>
        a tu marca con
        <br>

        productos
        <span>únicos.</span>

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



    <div class="hero-right">

      <div class="hero-slider">

        <img
          id="heroImage"
          src="https://picsum.photos/700/700?random=1"
        >

      </div>

    </div>

  </section>



  <!-- FEATURES -->

  <section class="features">

    <div class="feature">

      <i class="fa-solid fa-headset"></i>

      <div>

        <h4>Atención personalizada</h4>

        <p>Te asesoramos en todo el proceso</p>

      </div>

    </div>


    <div class="feature">

      <i class="fa-solid fa-pencil"></i>

      <div>

        <h4>Diseños a tu medida</h4>

        <p>Hacemos realidad tus ideas</p>

      </div>

    </div>


    <div class="feature">

      <i class="fa-regular fa-star"></i>

      <div>

        <h4>Producción de calidad</h4>

        <p>Materiales duraderos</p>

      </div>

    </div>


    <div class="feature">

      <i class="fa-solid fa-truck"></i>

      <div>

        <h4>Envíos seguros</h4>

        <p>A todo el país</p>

      </div>

    </div>

  </section>



  <!-- PRODUCTOS -->

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



  <!-- BENEFICIOS -->

  <section class="benefits">

    <div class="benefit">

      <i class="fa-solid fa-gift"></i>

      <div>

        <h4>Ideal para empresas</h4>

        <p>Regalos corporativos y eventos</p>

      </div>

    </div>


    <div class="benefit">

      <i class="fa-solid fa-tag"></i>

      <div>

        <h4>Descuentos por mayoreo</h4>

        <p>Precios especiales para negocios</p>

      </div>

    </div>


    <div class="benefit">

      <i class="fa-regular fa-clipboard"></i>

      <div>

        <h4>Cotizá fácil y rápido</h4>

        <p>Escribenos y te ayudamos</p>

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
          src="https://dummyimage.com/220x80/ffffff/0d3b36&text=mayor+studio"
        >

        <p>

          Productos personalizados
          para personas y empresas.

        </p>

      </div>


      <div>

        <h4>Navegación</h4>

        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Empresas</a>
        <a href="#">Nosotros</a>

      </div>


      <div>

        <h4>Categorías</h4>

        <a href="#">Tazas</a>
        <a href="#">Termos</a>
        <a href="#">Stickers</a>
        <a href="#">Anime</a>

      </div>


      <div>

        <h4>Contacto</h4>

        <p>+54 9 11 1111 1111</p>

        <p>hola@mayorstudio.com</p>

        <p>Buenos Aires, Argentina</p>

      </div>

    </div>


    <div class="copyright">

      © 2026 Mayor Studio.
      Todos los derechos reservados.

    </div>

  </footer>


  <!-- CARRITO -->

  <div class="cart-panel">

    <h3>Carrito</h3>

    <div id="cartItems"></div>

    <button onclick="finalizarCompra()">

      Finalizar Compra

    </button>

  </div>


  <script src="script.js"></script>

</body>
</html>
