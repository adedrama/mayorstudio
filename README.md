<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>Tienda Profesional</title>

  <!-- GOOGLE FONT -->
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
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  >

  <!-- ICONOS -->
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
  <img src="assets/logo.png" alt="Logo">
       
</div>

  <div class="puta">
    
        MAYOR STUDIO
      
   </div>

    <nav>
      <a href="#empresarial">Empresarial</a>
      <a href="#souvenirs">Souvenirs</a>
      <a href="#randoms">Randoms</a>
      <a href="#anime">Anime</a>
    </nav>

  </header>


  <!-- HERO -->
  <section class="hero">

    <div class="hero-slider">

      <img
        id="heroImage"
        src="https://picsum.photos/1600/700?random=1"
      >

    </div>

    <div class="hero-overlay">

      <h1>
        Productos únicos y personalizados
      </h1>

      <p>
        Diseños modernos, calidad premium y atención personalizada.
      </p>

    </div>

  </section>


  <!-- PRODUCTOS -->
  <main id="productos-container"></main>


  <!-- CARRITO -->
  <aside class="cart-panel">

    <div class="cart-header">
      <h2>Carrito</h2>
      <span id="cart-count">0</span>
    </div>

    <div id="carrito-items"></div>

    <div class="cart-footer">

      <button onclick="finalizarCompra()">
        Finalizar Compra
      </button>

    </div>

  </aside>


  <!-- WHATSAPP -->
  <a
    class="whatsapp-button"
    href="https://wa.me/5491169988927"
    target="_blank"
  >
    <i class="fa-brands fa-whatsapp"></i>
    ayuda personalizada
  </a>


  <!-- FOOTER -->
  <footer>

    <div class="footer-grid">

      <div>
        <h3>Mi Empresa</h3>

        <p>
          Productos personalizados, souvenirs,
          anime y regalos premium.
        </p>
      </div>

      <div>
        <h3>Contacto</h3>

        <p>+54 9 11 6998 8927</p>
        <p>empresa@email.com</p>
      </div>

      <div>
        <h3>Ubicación</h3>

        <p>Buenos Aires, Argentina</p>
      </div>

    </div>

    <div class="copyright">
      © 2026 Mi Empresa - Todos los derechos reservados
    </div>

  </footer>


  <script src="script.js"></script>

</body>
</html>
