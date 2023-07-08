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
    updateUserName: (state, action) => {
      state.user.user_name = action.payload;
    },
    updateUserPicture: (state, action) => {
      state.user.profile_pic = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(logout.fulfilled, (state) => {
      // localStorage.removeItem("token");
      // localStorage.removeItem("userId");
      state.token = "";
      state.user = {};
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

    ///////
    // const token = localStorage.getItem("token");
    // const cart = JSON.parse(localStorage.getItem("cart"));
    // const wishlist = JSON.parse(localStorage.getItem("wishlist"));

    // const cartIds = cart
    //   ? cart.map((product) => {
    //       return product._id;
    //     })
    //   : [];

    // const wishlistIds = wishlist
    //   ? wishlist.map((product) => {
    //       return product._id;
    //     })
    //   : [];

    // const sendCartAndWishlistToServer = async () => {};
    // const cartResponse = axios.patch(
    //   "http://localhost:8000/carts/updateCart",
    //   { products: cartIds },
    //   {
    //     headers: {
    //       Authorization: token,
    //     },
    //   }
    // );
    // const wishlistResponse = axios.patch(
    //   "http://localhost:8000/wishlists/",
    //   { products: wishlistIds },
    //   {
    //     headers: {
    //       Authorization: token,
    //     },
    //   }
    // );
    // await sendCartAndWishlistToServer();
    ///////
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(clearCart());
    dispatch(clearWishlist());
  }
);
export const { login, updateUserName, updateUserPicture } = authSlice.actions;
export default authSlice.reducer;
