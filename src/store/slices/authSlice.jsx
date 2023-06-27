import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { clearCart } from "./cartSlice";
import { clearWishlist } from "./wishlistSlice";

const initialState = {
  token: localStorage.getItem("token") || undefined,
  user: {
    name: "a",
    role: "user",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(logout.fulfilled, (state) => {
      localStorage.removeItem("token");
      state.token = "";
      state.user = null;
    }),
});
export const logout = createAsyncThunk(
  "auth/logout",
  async function ({ cart, wishlist }, { dispatch }) {
    // try {
    //   axios.patch("http://localhost:3000/cart", cart);
    //   await axios.put("http://localhost:3000/wishlist", wishlist);
    // } catch (err) {
    //   console.log(err.message);
    // }
    dispatch(clearCart());
    dispatch(clearWishlist());
  }
);
export const { login } = authSlice.actions;
export default authSlice.reducer;
