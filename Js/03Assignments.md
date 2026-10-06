Assignment 3 — Shopping Cart
const cart = [
  { id: 1, name: "Keyboard", price: 2000, quantity: 2 },
  { id: 2, name: "Mouse", price: 800, quantity: 1 },
  { id: 3, name: "Monitor", price: 12000, quantity: 2 }
];

Create functions:

getCartTotal(cart)
getTotalItems(cart)
findProduct(cart, productId)
removeProduct(cart, productId)
updateQuantity(cart, productId, quantity)

Example:

getCartTotal(cart)
// 28800

getTotalItems(cart)
// 5

Important: don't modify the original cart when updating/removing items. Return a new array.