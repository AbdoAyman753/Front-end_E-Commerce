import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { clearCart } from "./cartSlice";
import { clearWishlist } from "./wishlistSlice";

const initialState = {
  token: localStorage.getItem("token") || undefined,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.userInfo;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userInfo._id);
      console.log(state.user);
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
  async function (_, { dispatch }) {
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
