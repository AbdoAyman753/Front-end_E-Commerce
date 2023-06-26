import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< Updated upstream
  wishlist: [],
=======
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
>>>>>>> Stashed changes
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // check if is in wishlist
      const item = state.wishlist.find((el) => el._id === action.payload._id);
<<<<<<< Updated upstream
      console.log(item);
      !item ? state.wishlist.push(action.payload) : null;
=======
      !item ? state.wishlist.push(action.payload) : null;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
>>>>>>> Stashed changes
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
<<<<<<< Updated upstream
    },

    clearWishlist: (state) => {
      console.log("wish");
      state.wishlist = [];
=======
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },

    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.removeItem("wishlist");
>>>>>>> Stashed changes
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
