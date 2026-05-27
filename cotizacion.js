const logoInput = document.getElementById("logoInput");
const logo = document.getElementById("logo");

const scale = document.getElementById("scale");
const x = document.getElementById("x");
const y = document.getElementById("y");

const qty = document.getElementById("qty");
const total = document.getElementById("total");

let basePrice = 12000;

// =====================
// SUBIR LOGO + "REMOVER FONDO PRO SIMULADO"
// =====================
logoInput.addEventListener("change", (e) => {

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (ev) => {

    // SIMULACIÓN PRO (en real usarías remove.bg API)
    logo.src = ev.target.result;

  };

  reader.readAsDataURL(file);
});

// =====================
// EDITOR DE LOGO EN MOCKUP
// =====================
function updateTransform(){

  logo.style.transform = `
    translate(-50%, -50%)
    translate(${x.value}px, ${y.value}px)
    scale(${scale.value / 100})
  `;

}

scale.oninput = updateTransform;
x.oninput = updateTransform;
y.oninput = updateTransform;

// =====================
// PRECIO DINÁMICO PRO
// =====================
qty.oninput = () => {

  let q = parseInt(qty.value);

  let discount = 1;

  if(q >= 50) discount = 0.7;
  else if(q >= 20) discount = 0.8;
  else if(q >= 10) discount = 0.9;

  let price = q * basePrice * discount;

  total.innerText = price.toLocaleString();

};

qty.oninput();

// =====================
// AGREGAR AL CARRITO PRO
// =====================
function addToCartPro(){

  const item = {
    name: "Cotización PRO Termo personalizado",
    quantity: qty.value,
    price: basePrice,
    image: logo.src
  };

  localStorage.setItem("cartPro", JSON.stringify(item));

  alert("Cotización PRO agregada al carrito");
}


// =====================
// extra
// =====================


logoInput.addEventListener("change", (e) => {

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (ev) => {

    logo.src = ev.target.result;

    // SIMULACIÓN PRO: efecto "sin fondo"
    logo.style.filter = "brightness(1.1) contrast(1.2) drop-shadow(0px 10px 10px rgba(0,0,0,0.2))";

  };

  reader.readAsDataURL(file);
});


function addToCartPro(){

  const product = {
    name: "Cotización Empresa PRO (Termo personalizado)",
    price: basePrice,
    quantity: parseInt(qty.value),
    image: logo.src
  };

  // obtener carrito global
  let cart = JSON.parse(localStorage.getItem("cart")) || [];function addToCart(id){

  const product = products.find(p => p.id === id);

  const quantity = parseInt(
    document.getElementById(`qty-${id}`).value
  );

  cart.push({
    ...product,
    quantity
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

  alert("Producto agregado al carrito ✔");
}
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Agregado al carrito correctamente ✔");

  window.location.href = "index.html"; // vuelve al inicio
}

function updateCart(){

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {

    total += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image || item.images?.[0]}">
        <div>
          <h4>${item.name}</h4>
          <p>Cantidad: ${item.quantity}</p>
          <strong>$${(item.price * item.quantity).toLocaleString()}</strong>
        </div>
      </div>
    `;

  });

  document.getElementById("cart-total").innerText = total.toLocaleString();
  document.getElementById("cart-count").innerText = cart.length;

}

updateCart();
