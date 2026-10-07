// Assignment 3 — Shopping Cart
const cart = [
  { id: 1, name: "Keyboard", price: 2000, quantity: 2 },
  { id: 2, name: "Mouse", price: 800, quantity: 1 },
  { id: 3, name: "Monitor", price: 12000, quantity: 2 }
];

// Create functions:
const getCartTotal = (cart) =>{
    const totalPrice = cart.reduce((start , singleCart) =>{
        return start + singleCart.price * singleCart.quantity
    }, 0)
    console.log('Total Price :',totalPrice);
    return totalPrice;
}

const getTotalItems = (cart) => {
    const totalItem = cart.reduce((start , singleCart)=>{
            return start + singleCart.quantity
        },0)
        console.log("Total items : " , totalItem)
    }

const findProduct = (cart , productId) => {
    const product = cart.find((singleCart) => {
        return singleCart.id == productId
    })
    console.log('Product Found :',product)
}

const removeProduct = (cart , productId) => {
    const removedProductArr = cart.filter((singleCart) => {
      return singleCart.id !== productId  
    })
    console.log('Removed Product : ' , removedProductArr)
    return removedProductArr
}

const updateQuantity = (cart, productId, quantity) => {
    const newCart = cart.map(singleCart => {
        if(singleCart.id === productId){
            return {...singleCart , quantity }   
        }
        return {...singleCart}
        
    });
    newCart.map((singleCart) => {
        return {...singleCart }
    })
    console.log(newCart);
    
}

getCartTotal(cart)
getTotalItems(cart)
findProduct(cart, 3)
removeProduct(cart, 1)
updateQuantity(cart, 3, 2)
console.log(cart)

// Example:

// getCartTotal(cart)
// 28800

// getTotalItems(cart)
// 5

// Important: don't modify the original cart when updating/removing items. Return a new array.