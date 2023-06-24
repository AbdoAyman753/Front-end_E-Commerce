import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   _id: 1,
    //   product_name: "1st game",
    //   description:
    //     " minus animi vel alias corporis quibusdam tempore possimus quia voluptatibus!",
    //   price: 25,
    //   categoryId: 4,
    //   recently_added: true,
    //   imgs_links:
    //     "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/qi3gqverqthxatrgu18v/fortnite-logo2?fimg-ssr-default",
    //   quantity: 1,
    // },
    // {
    //   _id: 2,
    //   product_name: "2nd game",
    //   description: "us quia accusantium maiores saepe blanditiis enim quis ",
    //   price: 18,
    //   categoryId: 1,
    //   recently_added: false,
    //   imgs_links:
    //     "https://mg-static.prod-my.games/media/games/ca677b23226c02f5cdeedd4d532f4b61.jpg",
    //   quantity: 1,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if is in cart
      const item = state.cart.find((el) => el._id === action.payload._id);
      console.log(item);
      !item
        ? // ? state.cart.push({ ...action.payload, quantity: 1 })
          state.cart.push(action.payload)
        : null;
      //   console.log(action.payload);
      //   state.cart.push({ ...action.payload, quantity: 1 });
      //   state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    // increaseQuantity: (state, action) => {
    //   const item = state.cart.find((el) => el._id === action.payload);
    //   item.quantity++;
    // },
    // decreaseQuantity: (state, action) => {
    //   const item = state.cart.find((el) => el._id === action.payload);
    //   item.quantity > 1
    //     ? item.quantity--
    //     : (state.cart = state.cart.filter(
    //         (item) => item._id !== action.payload
    //       ));
    // },
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
  //   increaseQuantity,
  //   decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
