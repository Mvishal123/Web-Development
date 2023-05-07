if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const deleteButton = document.querySelectorAll(".btn-danger");
  deleteButton.forEach((button) => {
    button.addEventListener("click", removeCartItem);
  });

  const cartQuantityInput = document.querySelectorAll(".cart-quantity-input");
  cartQuantityInput.forEach((item) => {
    item.addEventListener("change", quantityChanged);
  });

  const addToCartBtn = document.querySelectorAll(".shop-item-button");
  addToCartBtn.forEach((item) => {
    item.addEventListener("click", addedToCart);
  });

  const purchaseBtn = document.querySelector('.btn-purchase');
  purchaseBtn.addEventListener('click', itemsPurchased);
}

function itemsPurchased(){
  alert("Purchased successfully");
  let cartItems = document.querySelector('.cart-items');

  while(cartItems.hasChildNodes()){
    cartItems.querySelector('.cart-column').remove();
  }
  // cartItems.remove();
  let price = document.querySelector('.cart-total-price');
  price.innerHTML = '$0';
}

function addedToCart(e) {
  let itemAdded = e.target.parentElement.parentElement;
  let title = itemAdded.querySelector(".shop-item-title").innerText;
  let price = itemAdded.querySelector(".shop-item-price").innerText;
  let imageSrc = itemAdded.querySelector(".shop-item-image").src;
  addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
  let cart = document.querySelector(".cart-items");
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  
  let cartItemNames = cart.querySelectorAll('.cart-item-title');
  for(let i = 0; i < cartItemNames.length; i++){
    if(cartItemNames[i].innerText == title){
      alert("Product already in cart");
      return;
    }
  }
    let cartRowContents = `
      <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1" min="0">
      <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`;
  cartRow.innerHTML = cartRowContents;
  cart.append(cartRow);
  cartRow.querySelector('.btn-danger').addEventListener('click', removeCartItem);
  cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged);
  updateTotal();
}

function quantityChanged(e) {
  let inputChanged = e.target;
  if (isNaN(inputChanged.value) || inputChanged.value <= 0) {
    inputChanged.value = 1;
  }
  updateTotal();
}

function removeCartItem(e) {
  var buttonClicked = e.target.parentElement.parentElement;
  buttonClicked.remove();
  updateTotal();
}

function updateTotal() {
  var cartContainer = document.querySelector(".cart-items");
  var cartItems = cartContainer.querySelectorAll(".cart-row");
  var total = 0;

  cartItems.forEach(item => {
    let price = item.querySelector('.cart-price');
    price = parseFloat(price.innerText.replace('$', ''));
    
    let quantity = item.querySelector('.cart-quantity-input').value;
    price = quantity * price;
    total += price;
  })
  //update total
  const totalValue = document.querySelector(".cart-total-price");
  total = Math.round(total * 100) / 100;
  totalValue.innerText = "$" + total;
}
