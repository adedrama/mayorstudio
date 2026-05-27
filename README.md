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
</html>
