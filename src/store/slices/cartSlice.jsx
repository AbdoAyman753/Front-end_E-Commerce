import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if is in cart
      const item = state.cart.find((el) => el._id === action.payload._id);
      console.log(item);
      !item ? state.cart.push(action.payload) : null;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const totalPrice = (state) =>
  state.cart.cart?.reduce((sum, item) => (sum += item.price), 0);

export const {
  addToCart,
  removeFromCart,

  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
