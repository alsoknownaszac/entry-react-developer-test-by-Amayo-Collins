import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // adding a product to cart
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    // increment the product quantity if the plus btn in cart is clicked or a product that has the same attributes selected is added to the cart
    // incrementing the prices of the product by multiplying the current quantity with the prices - an object called cartPrices is created seperate from prices to allow the correct calculation of (prices x quantity)
    incrementProductQuantity: (state, action) => {
      state.value.forEach((element) => {
        if (action.payload === element.id) {
          element.quantity++;
          element.prices.forEach((prices, idx) => {
            element.cartPrices[idx].amount = prices.amount * element.quantity;
          });
        }
      });
    },
    // decrement the product quantity if the minus btn in cart is clicked
    // decrementing the prices of the product by multiplying the current quantity with the prices - an object called cartPrices is created seperate from prices to allow the correct calculation of (prices x quantity)
    // if the product quantity is decremented to 0 then remove from cart
    decrementProductQuantity: (state, action) => {
      state.value.forEach((element, idx, arr) => {
        if (action.payload === element.id) {
          element.quantity--;
          element.prices.forEach((prices, idx) => {
            element.cartPrices[idx].amount = prices.amount * element.quantity;
          });
        }
        if (element.quantity === 0) {
          state.value = arr.filter((curr) => curr.id !== element.id);
        }
      });
    },
  },
});

const { actions, reducer } = cartSlice;

export const viewCartItems = (state) => ({
  cart: state.cart.value,
});

export const { addToCart, incrementProductQuantity, decrementProductQuantity } =
  actions;

export default reducer;
