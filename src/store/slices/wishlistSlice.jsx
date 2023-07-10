import { createSlice } from "@reduxjs/toolkit";

const wishlistData = localStorage.getItem("wishlist");

const initialState = {
  wishlist: /^[\],:{}\s]*$/.test(
    wishlistData
      ?.replace(/\\["\\\/bfnrtu]/g, "@")
      .replace(
        /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        "]"
      )
      .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
  )
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
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
      const item = state.wishlist.find((el) => el._id === action.payload);
      if (!item) return;
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },

    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.removeItem("wishlist");
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, setWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
