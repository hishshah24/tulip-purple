// LOGIN SYSTEM
function login(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email.includes("@gmail.com") && password.length >= 4){

    localStorage.setItem("purpleFlowersUser", email);

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("website").style.display = "block";

  }else{
    alert("Gunakan Gmail dan password valid 💜");
  }
}

function logout(){

  localStorage.removeItem("purpleFlowersUser");

  document.getElementById("website").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
}

// AUTO LOGIN
window.onload = () => {

  const user = localStorage.getItem("purpleFlowersUser");

  if(user){
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("website").style.display = "block";
  }

  generateProducts();
}

// FLOWER DATA
const flowerProducts = [

  {
    name:"Tulip Dream Bucket",
    image:"https://images.unsplash.com/photo-1525310072745-f49212b5ac6d"
  },

  {
    name:"Mawar Pink Sweet",
    image:"https://images.unsplash.com/photo-1518895949257-7621c3c786d7"
  },

  {
    name:"Edelweis Cloud",
    image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },

  {
    name:"Melati Creamy",
    image:"https://images.unsplash.com/photo-1468327768560-75b778cbb551"
  },

  {
    name:"Sunflower Honey",
    image:"https://images.unsplash.com/photo-1470509037663-253afd7f0f51"
  },

  {
    name:"Lavender Purple",
    image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  {
    name:"Peony Peach",
    image:"https://images.unsplash.com/photo-1462275646964-a0e3386b89fa"
  },

  {
    name:"Sakura Pinky",
    image:"https://images.unsplash.com/photo-1526047932273-341f2a7631f9"
  },

  {
    name:"Daisy Lovely",
    image:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc"
  },

  {
    name:"Lily White Soft",
    image:"https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad1"
  },

  {
    name:"Hydrangea Blue",
    image:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  },

  {
    name:"Baby Breath Purple",
    image:"https://images.unsplash.com/photo-1526397751294-331021109fbd"
  }

];

// GENERATE PRODUCTS
function generateProducts(){

  const productsContainer = document.getElementById("products");

  flowerProducts.forEach((flower)=>{

    productsContainer.innerHTML += `

      <div class="product-card">

        <img src="${flower.image}?auto=format&fit=crop&w=800&q=80">

        <h3>${flower.name}</h3>

        <div class="price">Rp 15.000</div>

        <button onclick="addToCart('${flower.name}',15000)">
          Tambah ke Keranjang
        </button>

      </div>

    `;
  });

}

// CART SYSTEM
let cart = [];

function addToCart(name,price){

  cart.push({name,price});

  renderCart();

  alert(name + " berhasil ditambahkan 🌷");
}

function renderCart(){

  const cartItems = document.getElementById("cartItems");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item)=>{

    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>Rp ${item.price.toLocaleString()}</span>
      </div>
    `;
  });

  document.getElementById("totalPrice").innerHTML =
    "Total: Rp " + total.toLocaleString();
}

// CHECKOUT WA
function checkoutWhatsApp(){

  const userEmail =
    localStorage.getItem("purpleFlowersUser") || "Tidak diketahui";

  if(cart.length === 0){

    alert("Keranjang masih kosong 💜");
    return;
  }

  let total = 0;

  let message =
`🌷 *PURPLE FLOWERS ORDER* 🌷

📧 Email Pembeli:
${userEmail}

🛍️ Daftar Belanja:
`;

  cart.forEach((item,index)=>{

    total += item.price;

    message += `
${index+1}. ${item.name}
Rp ${item.price.toLocaleString()}
`;
  });

  message += `

💰 Total:
Rp ${total.toLocaleString()}

📱 Pembayaran DANA:
+62 856-0663-7038

Terima kasih sudah berbelanja di Purple Flowers 💜`;

  const phone = "6281515521739";

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url,"_blank");
}

// SCROLL
function scrollToProducts(){

  document.getElementById("productsSection")
  .scrollIntoView({behavior:"smooth"});
}
