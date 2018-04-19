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
else {
  let list = ''
  for(let i = 0; i < cart.length - 1; i++) {
    list += cart[i].itemName + " at $" + cart[i].itemPrice + ", "
  }
  list += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  return inYourCart + list
}
}

/*
function viewCart() {
  const l = cart.length;
  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  const itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
*/

var prices = []; 

function pricesOfCartItems() { 
  for (let i = 0; i < cart.length; i++);
  prices.push(Object.values(cart)[i]);
  return prices
}

function total(){
    pricesOfCartItems()
    var sum = 0;
    for (let i = 0; i < prices.length; i++)
    sum += prices[i]
  return sum 
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}