import { createSlice } from "@reduxjs/toolkit";
const cartData = localStorage.getItem("cart");

const initialState = {
  // cart: JSON.parse(localStorage.getItem("cart")) || [],
  cart: /^[\],:{}\s]*$/.test(
    cartData
      ?.replace(/\\["\\\/bfnrtu]/g, "@")
      .replace(
        /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        "]"
      )
      .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
  )
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if is in cart
      const item = state.cart.find((el) => el._id === action.payload._id);
      !item ? state.cart.push(action.payload) : null;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find((el) => el._id === action.payload);
      if (!item) return;
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    setCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const totalPrice = (state) =>
  state.cart.cart?.reduce((sum, item) => (sum += item.price), 0);

export const {
  addToCart,
  removeFromCart,

  clearCart,
  setCart,
} = cartSlice.actions;
export default cartSlice.reducer;
