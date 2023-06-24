import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // check if is in wishlist
      const item = state.wishlist.find((el) => el._id === action.payload._id);
      console.log(item);
      !item ? state.wishlist.push(action.payload) : null;
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },

    clearWishlist: (state) => {
      console.log("wish");
      state.wishlist = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
