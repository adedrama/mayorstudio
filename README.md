<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title></title>

  <link rel="stylesheet" href="style.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
</head>

<body>

  <!-- ================= HEADER ================= -->

  <header class="header">
    <div class="logo">
      <h1>mayor</h1>
      <span>studio</span>
    </div>

    <nav>
      <a href="#">Inicio</a>
      <a href="#productos">Productos</a>
      <a href="#empresas">Empresas</a>
      <a href="#anime">Anime</a>
      <a href="#contacto">Contacto</a>
    </nav>

    <div class="header-icons">
      <i class="fa-solid fa-magnifying-glass"></i>

      <div class="cart-icon" id="cartButton">
        <i class="fa-solid fa-cart-shopping"></i>
        <span id="cart-count">0</span>
      </div>
    </div>
  </header>

  <!-- ================= BANNERS ================= -->

  <section class="banner-slider">

    <div class="banner-track">

      <div class="banner active">
        <img src="https://picsum.photos/1600/500?random=11">
        <div class="banner-overlay">
          <h2>Productos Personalizados Premium</h2>
          <p>Diseños únicos para empresas, anime y souvenirs.</p>
        </div>
      </div>

      <div class="banner">
        <img src="https://picsum.photos/1600/500?random=12">
        <div class="banner-overlay">
          <h2>Termos, Tazas y Stickers</h2>
          <p>Calidad profesional y producción moderna.</p>
        </div>
      </div>

      <div class="banner">
        <img src="https://picsum.photos/1600/500?random=13">
        <div class="banner-overlay">
          <h2>Souvenirs Empresariales</h2>
          <p>Potencia tu marca con productos únicos.</p>
        </div>
      </div>

      <div class="banner">
        <img src="https://picsum.photos/1600/500?random=14">
        <div class="banner-overlay">
          <h2>Anime & Cultura Pop</h2>
          <p>Diseños coloridos y coleccionables.</p>
        </div>
      </div>

    </div>

  </section>

  <!-- ================= HERO ================= -->

  <section class="hero">

    <div class="hero-left">

      <h1>
        Dale identidad <br>
        a tu marca con <br>
        productos <span>únicos.</span>
      </h1>

      <p>
        Vasos, tazas, termos de acero, stickers y más.
        Todo personalizado para ti.
      </p>

      <div class="hero-buttons">
        <button class="btn-primary">Ver productos</button>
        <button class="btn-secondary">Cotiza para tu empresa</button>
      </div>

    </div>

    <div class="hero-right">

      <img src="https://picsum.photos/400/500?random=15" class="hero-main">

      <div class="hero-small">
        <img src="https://picsum.photos/220/300?random=16">
      </div>

      <div class="hero-small2">
        <img src="https://picsum.photos/220/300?random=17">
      </div>

    </div>

  </section>

  <!-- ================= FEATURES ================= -->

  <section class="features">

    <div class="feature">
      <i class="fa-solid fa-headset"></i>
      <div>
        <h4>Atención personalizada</h4>
        <p>Te asesoramos en todo el proceso</p>
      </div>
    </div>

    <div class="feature">
      <i class="fa-solid fa-pen-ruler"></i>
      <div>
        <h4>Diseños a medida</h4>
        <p>Hacemos realidad tus ideas</p>
      </div>
    </div>

    <div class="feature">
      <i class="fa-solid fa-star"></i>
      <div>
        <h4>Producción de calidad</h4>
        <p>Materiales duraderos</p>
      </div>
    </div>

    <div class="feature">
      <i class="fa-solid fa-truck-fast"></i>
      <div>
        <h4>Envíos seguros</h4>
        <p>A todo el país</p>
      </div>
    </div>

  </section>

  <!-- ================= PRODUCTOS ================= -->

  <section class="products-section" id="productos">

    <div class="section-title">
      <h2>Lo que podemos personalizar para ti</h2>
    </div>

    <div class="products-grid" id="productsGrid">

    </div>

  </section>

  <!-- ================= EMPRESAS ================= -->

  <section class="business-section" id="empresas">

    <div class="business-box">
      <i class="fa-solid fa-gift"></i>
      <div>
        <h3>Ideal para empresas</h3>
        <p>Regalos corporativos y eventos.</p>
      </div>
    </div>

    <div class="business-box">
      <i class="fa-solid fa-tags"></i>
      <div>
        <h3>Descuentos por mayoreo</h3>
        <p>Precios especiales para negocios.</p>
      </div>
    </div>

    <div class="business-box">
      <i class="fa-solid fa-clipboard-list"></i>
      <div>
        <h3>Cotización rápida</h3>
        <p>Te ayudamos con tu proyecto.</p>
      </div>
    </div>

  </section>

  <!-- ================= CARRITO ================= -->

  <div class="cart-sidebar" id="cartSidebar">

    <div class="cart-header">
      <h3>Tu carrito</h3>
      <button id="closeCart">X</button>
    </div>

    <div id="cart-items"></div>

    <div class="cart-footer">
      <h2>Total: $<span id="cart-total">0</span></h2>

      <button id="buyButton">
        Finalizar Compra
      </button>
    </div>

  </div>

  <!-- ================= WHATSAPP ================= -->

  <a class="whatsapp-btn"
     href="https://wa.me/5491111111111"
     target="_blank">

     <i class="fa-brands fa-whatsapp"></i>
     <span>Ayuda personalizada</span>

  </a>

  <!-- ================= FOOTER ================= -->

  <footer id="contacto">

    <div class="footer-grid">

      <div>
        <div class="footer-logo">
          <h2>mayor</h2>
          <span>studio</span>
        </div>

        <p>
          Productos personalizados para personas y empresas.
        </p>
      </div>

      <div>
        <h4>NAVEGACIÓN</h4>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Empresas</a>
        <a href="#">Anime</a>
      </div>

      <div>
        <h4>CATEGORÍAS</h4>
        <a href="#">Vasos</a>
        <a href="#">Termos</a>
        <a href="#">Stickers</a>
        <a href="#">Anime</a>
      </div>

      <div>
        <h4>CONTACTO</h4>
        <p>+54 11 1234-5678</p>
        <p>hola@mayorstudio.com</p>
        <p>Buenos Aires, Argentina</p>
      </div>

    </div>

    <div class="footer-bottom">
      © 2026 Mayor Studio. Todos los derechos reservados.
    </div>

  </footer>

  <script src="script.js"></script>

</body>
</html>
