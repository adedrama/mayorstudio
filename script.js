// HERO SLIDER


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
