import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // check if is in wishlist
      const item = state.wishlist.find((el) => el._id === action.payload._id);

      !item ? state.wishlist.push(action.payload) : null;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },

    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.removeItem("wishlist");
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
