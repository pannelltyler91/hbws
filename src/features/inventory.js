import { createSlice } from "@reduxjs/toolkit";
import necklace from './images/necklace.jpg'
import watch from './images/watch.jpg'
import ring from './images/ring.jpg'
import earrings from './images/earrings.jpg'

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: { inventory: [{id:1,pricePerItem:20,title:'Watch',description:'This is a watch',quantity:0,image:watch},{id:2,pricePerItem:20,title:'Necklace',description:'This is a necklace',quantity:0,image:necklace},{id:3,pricePerItem:20,title:'Ring',description:'This is a ring',quantity:0,image:ring},{id:4,pricePerItem:20,title:'Earring',description:'This is a earring',quantity:0,image:earrings},], 
  cartCount: 0,total:0,cart:[] },
  reducers: {
    addToCart: (state, action) => {
      let thisItem = action.payload;

      let existingItem = state.cart.find((item) => item.id === thisItem.id);
      existingItem
        ? (existingItem.quantity += 1)
        : (state.cart = [...state.cart, thisItem]);
      state.cartCount = state.cartCount += 1;
      state.total = state.total += thisItem.price
      console.log(state.cart,state.total);
    },
    removeFromCart: (state, action) => {
      let existingItem = state.cart.find((item) => item.id === action.payload.id);
      let updatedCart = state.cart.filter(item => item.id !== action.payload.id);
      existingItem.quantity > 1
        ? (existingItem.quantity -= 1)
        : (state.cart = updatedCart);
      state.cartCount = state.cartCount -= 1;
      state.total = state.total-=existingItem.price
      console.log(state.cart);
    },
    testButton:(state,action) =>{
        let thisThing = action.payload
        console.log(state.cart,thisThing)
    },
    checkOut:(state,action) =>{
        let finalAnswer = action.payload

        console.log(finalAnswer.cart)
    }
  },
});
export const { addToCart, removeFromCart,testButton,checkOut } = inventorySlice.actions;
export default inventorySlice.reducer;
