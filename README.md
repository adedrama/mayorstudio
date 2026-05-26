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
    href="https://wa.me/5491169988927"
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

