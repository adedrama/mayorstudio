// ======================
// PRODUCTOS
// ======================

const products = [
  {
    id: 1,
    name: "Taza Personalizada",
    description: "Tazas premium personalizadas con tu logo.",
    price: 15000,
    category: "souvenirs",
    images: [
      "https://picsum.photos/400/400?random=21",
      "https://picsum.photos/400/400?random=22",
      "https://picsum.photos/400/400?random=23",
      "https://picsum.photos/400/400?random=24"
    ]
  },

  {
    id: 2,
    name: "Termo Acero",
    description: "Termos modernos personalizados.",
    price: 28000,
    category: "empresarial",
    images: [
      "https://picsum.photos/400/400?random=31",
      "https://picsum.photos/400/400?random=32",
      "https://picsum.photos/400/400?random=33",
      "https://picsum.photos/400/400?random=34"
    ]
  },

  {
    id: 3,
    name: "Pack Stickers",
    description: "Stickers premium resistentes al agua.",
    price: 9000,
    category: "randoms",
    images: [
      "https://picsum.photos/400/400?random=41",
      "https://picsum.photos/400/400?random=42",
      "https://picsum.photos/400/400?random=43",
      "https://picsum.photos/400/400?random=44"
    ]
  },

  {
    id: 4,
    name: "Anime Collection",
    description: "Productos anime exclusivos.",
    price: 32000,
    category: "anime",
    images: [
      "https://picsum.photos/400/400?random=51",
      "https://picsum.photos/400/400?random=52",
      "https://picsum.photos/400/400?random=53",
      "https://picsum.photos/400/400?random=54"
    ]
  }
];

const productsGrid = document.getElementById("productsGrid");

products.forEach((product) => {

  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
  
    <div class="product-gallery">
      <img src="${product.images[0]}" id="gallery-${product.id}">
    </div>

    <div class="product-info">

      <h3>${product.name}</h3>

      <p>${product.description}</p>

      <div class="price">
        $${product.price.toLocaleString()}
      </div>

      <div class="quantity">
        <span>Cantidad:</span>

        <input type="number"
          min="1"
          value="1"
          id="qty-${product.id}">
      </div>

      <button class="add-cart"
        onclick="addToCart(${product.id})">

        Agregar al carrito

      </button>

    </div>
  
  `;

  productsGrid.appendChild(card);

  // Slider automático por producto

  let currentImage = 0;

  setInterval(() => {

    currentImage++;

    if(currentImage >= product.images.length){
      currentImage = 0;
    }

    document.getElementById(
      `gallery-${product.id}`
    ).src = product.images[currentImage];

  }, 2500);

});

// ======================
// BANNERS AUTOMÁTICOS
// ======================

const banners = document.querySelectorAll(".banner");

let bannerIndex = 0;

setInterval(() => {

  banners[bannerIndex].classList.remove("active");

  bannerIndex++;

  if(bannerIndex >= banners.length){
    bannerIndex = 0;
  }

  banners[bannerIndex].classList.add("active");

}, 4000);

// ======================
// CARRITO
// ======================

let cart = [];

function addToCart(id){

  const product = products.find(p => p.id === id);

  const quantity = parseInt(
    document.getElementById(`qty-${id}`).value
  );

  cart.push({
    ...product,
    quantity
  });

  updateCart();

  alert("Producto agregado al carrito");

}

function updateCart(){

  const cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {

    total += item.price * item.quantity;

    cartItems.innerHTML += `
    
      <div class="cart-item">

        <img src="${item.images[0]}">

        <div>

          <h4>${item.name}</h4>

          <p>Cantidad: ${item.quantity}</p>

          <strong>
            $${(item.price * item.quantity).toLocaleString()}
          </strong>

        </div>

      </div>
    
    `;

  });

  document.getElementById("cart-total")
  .innerText = total.toLocaleString();

  document.getElementById("cart-count")
  .innerText = cart.length;

}

// ======================
// SIDEBAR CARRITO
// ======================

const cartSidebar =
document.getElementById("cartSidebar");

document.getElementById("cartButton")
.addEventListener("click", () => {

  cartSidebar.classList.add("active");

});

document.getElementById("closeCart")
.addEventListener("click", () => {

  cartSidebar.classList.remove("active");

});

// ======================
// FINALIZAR COMPRA
// ======================

document.getElementById("buyButton")
.addEventListener("click", () => {

  if(cart.length === 0){

    alert("Tu carrito está vacío");
    return;

  }

  let message = "Hola! Quiero realizar esta compra:%0A%0A";

  cart.forEach((item) => {

    message += `• ${item.name}
Cantidad: ${item.quantity}
Subtotal: $${item.price * item.quantity}%0A%0A`;

  });

  const total = cart.reduce((acc,item)=>
    acc + item.price * item.quantity,0);

  message += `TOTAL: $${total}`;

  alert("Compra confirmada!");

  window.open(
    `https://wa.me/5491111111111?text=${message}`,
    "_blank"
  );

});
