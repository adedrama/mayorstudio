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
