var cart = [];
var i = 0

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDetails = { };
  itemDetails.itemName = item;
  itemDetails.itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push(itemDetails)
  return item + " has been added to your cart."
}

function viewCart() {
  var currentCart = " ";
  var inYourCart = "In your cart, you have ";
  var lastItemInCart = " ";
  if (cart.length === 0){ 
  return "Your shopping cart is empty."
  }
  else if (cart.length === 1){ 
    return inYourCart + cart[0].itemName + " at $" + cart[0].itemPrice + "."
}
else if (cart.length === 2){
  return inYourCart + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " +cart[1].itemName + " at $" + cart[1].itemPrice + "."
}
else if (i < cart.length) {
     currentCart += cart[i].itemName + " at $" + cart[i].itemPrice + ", "; i++
    }
  else {
    lastItemInCart += "and " + cart[i].itemName + " at $" + cart[0].itemPrice + "."
  }
  return inYourCart + currentCart + lastItemInCart
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}