let cart = [];

function init() {
  renderHeader();
  renderFooter();
  renderMenu();

  document
    .querySelector(".order button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      placeOrder();
    });
}

function renderHeader() {
  document.getElementById("header").innerHTML = getHeader();
}

function renderFooter() {
  document.getElementById("footer").innerHTML = getFooter();
}

function addToCart(dishIndex) {
  let dish = myDishes[dishIndex];
  let item = findCartItem(dish.name);

  if (item) {
    item.quantity++;
  } else {
    cart.push(createCartItem(dish));
  }
  renderCart();
}

function findCartItem(name) {
  return cart.find((item) => item.name === name);
}

function createCartItem(dish) {
  return { name: dish.name, price: dish.price, quantity: 1 };
}

function updateCartItemQuantity(dishName, action) {
  let item = findCartItem(dishName);
  if (item) {
    adjustQuantity(item, action);
    removeIfZero(item);
  }
  renderCart();
}

function adjustQuantity(item, action) {
  item.quantity += action === "increment" ? 1 : -1;
}

function removeIfZero(item) {
  if (item.quantity === 0) {
    cart = cart.filter((cartItem) => cartItem !== item);
  }
}

function removeCartItem(dishName) {
  cart = cart.filter((item) => item.name !== dishName);
  renderCart();
}

function renderCart() {
  let basketElement = document.querySelector(".prices");
  basketElement.innerHTML = getCartItemsHTML() + getTotalHTML();
}

function getCartItemsHTML() {
  return cart
    .map(
      (item) =>
        `<div class="cart-item">
          <div class="item-details">
            <span class="item-name">${item.quantity}x ${item.name}</span>
            <span class="item-price">${(item.price * item.quantity).toFixed(
              2
            )} €</span>
          </div>
          ${getItemControlsHTML(item.name)}
        </div>`
    )
    .join("");
}

function getItemControlsHTML(name) {
  return `<div class="item-controls">
            <button class="quantity-btn" onclick="updateCartItemQuantity('${name}', 'increment')">
              <img src="./assets/icons/plus.png" alt="Hinzufügen" class="icon">
            </button>
            <button class="quantity-btn" onclick="updateCartItemQuantity('${name}', 'decrement')">
              <img src="./assets/icons/minus.png" alt="Verringern" class="icon">
            </button>
            <button class="remove-btn" onclick="removeCartItem('${name}')">🗑️</button>
          </div>`;
}

function getTotalHTML() {
  let subtotal = calculateSubtotal();
  let deliveryCost = getDeliveryCost();
  let total = subtotal + deliveryCost;

  return `<hr />
          <div class="thin">Zwischensumme: ${subtotal.toFixed(2)} €</div>
          <div class="thin">Lieferkosten: ${deliveryCost.toFixed(2)} €</div>
          <div class="bold">Gesamt: ${total.toFixed(2)} €</div>`;
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getDeliveryCost() {
  let deliveryOption = document.querySelector(
    'input[name="delivery-option"]:checked'
  ).value;
  return deliveryOption === "delivery" ? 5.0 : 0;
}

function updateDeliveryOption() {
  toggleDeliveryFields();
  renderCart();
}

function toggleDeliveryFields() {
  let deliveryOption = document.querySelector(
    'input[name="delivery-option"]:checked'
  ).value;
  document.getElementById("delivery-fields").style.display =
    deliveryOption === "delivery" ? "block" : "none";
}

function placeOrder() {
  if (cart.length === 0)
    return alert(
      "Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, um eine Bestellung auszulösen."
    );

  let deliveryOption = document.querySelector(
    'input[name="delivery-option"]:checked'
  ).value;
  if (deliveryOption === "delivery" && !validateDeliveryFields()) {
    return alert(
      "Bitte füllen Sie alle Felder aus, um eine Lieferung durchzuführen."
    );
  }

  alert(getOrderMessage(deliveryOption));
  cart = [];
  renderCart();
}

function validateDeliveryFields() {
  let fields = ["name", "street", "postal-code", "city"].map((id) =>
    document.getElementById(id).value.trim()
  );
  return fields.every((field) => field !== "");
}

function getOrderMessage(deliveryOption) {
  return deliveryOption === "delivery"
    ? "Vielen Dank für Ihre Bestellung, die Lieferung wird in ca. 30 Minuten bei Ihnen eintreffen."
    : "Vielen Dank für Ihre Bestellung. Die Bestellung kann in ca. 30 Minuten bei uns abgeholt werden.";
}

function renderMenu() {
  document.getElementById("render-meals").innerHTML = myDishes
    .map((Menu, index) => getMenuTemplate(index, Menu))
    .join("");
}

document.addEventListener("DOMContentLoaded", init);

window.addEventListener("scroll", function () {
  document
    .getElementById("scroll-to-top")
    .classList.toggle("show", window.scrollY > 200);
});
