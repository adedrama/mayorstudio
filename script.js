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

  document.getElementById("heroImage").src = heroImages[heroIndex];

}, 3500);


// PRODUCTS

const productos = [

  {
    nombre:"Vasos y Tazas",
    descripcion:"Personalizados para empresas y regalos.",

    imagenes:[
      "https://picsum.photos/600/600?random=11",
      "https://picsum.photos/600/600?random=12",
      "https://picsum.photos/600/600?random=13",
      "https://picsum.photos/600/600?random=14"
    ]
  },

  {
    nombre:"Termos",
    descripcion:"Termos premium de acero inoxidable.",

    imagenes:[
      "https://picsum.photos/600/600?random=21",
      "https://picsum.photos/600/600?random=22",
      "https://picsum.photos/600/600?random=23",
      "https://picsum.photos/600/600?random=24"
    ]
  },

  {
    nombre:"Stickers",
    descripcion:"Diseños modernos y personalizados.",

    imagenes:[
      "https://picsum.photos/600/600?random=31",
      "https://picsum.photos/600/600?random=32",
      "https://picsum.photos/600/600?random=33",
      "https://picsum.photos/600/600?random=34"
    ]
  },

  {
    nombre:"Anime",
    descripcion:"Productos inspirados en anime.",

    imagenes:[
      "https://picsum.photos/600/600?random=41",
      "https://picsum.photos/600/600?random=42",
      "https://picsum.photos/600/600?random=43",
      "https://picsum.photos/600/600?random=44"
    ]
  }

];


const productsGrid = document.getElementById("productsGrid");


}
