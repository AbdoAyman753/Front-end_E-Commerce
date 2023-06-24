/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, totalPrice } from "../store/slices/cartSlice";
const ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 mr-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

// const CART = [
//   {
//     _id: 1,
//     product_name: "1st game",
//     description:
//       " minus animi vel alias corporis quibusdam tempore possimus quia voluptatibus!",
//     price: 25,
//     quantity: 1,
//   },
//   {
//     _id: 2,
//     product_name: "2nd game",
//     description: "us quia accusantium maiores saepe blanditiis enim quis ",
//     price: 18,
//     categoryId: 1,
//     quantity: 1,
//   },
//   {
//     _id: 3,
//     product_name: "3rd game",
//     description: "Lorem ipsum dolor sit amet consectetur",
//     price: 37,
//     categoryId: 3,
//     quantity: 1,
//   },
// ];
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const total = useSelector(totalPrice);
  const dispatch = useDispatch();

  //   if (cart.length < 1) return
  return (
    <div className="container py-14">
      <Link
        to="/store"
        className="flex items-center text-cyan-800 hover:translate-x-[-2px] hover:text-cyan-900 transition-all"
      >
        <span>{ICON}</span>Back to store
      </Link>
      {cart.length == 0 && (
        <>
          <div className="w-48 h-48 m-auto mt-16">
            <img
              className="w-full h-full"
              src="../../public/emptycart.png"
              alt=""
            />
          </div>
          <p className="text-center text-lg">your cart is empty!</p>
        </>
      )}
      {cart.length > 0 && (
        <>
          <div className="border border-cyan-500 my-8">
            <div className="flex justify-between bg-cyan-600 text-white p-3">
              <p>Your cart, User</p>
              <p>total price ${total}</p>
            </div>
            {cart?.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          <button className="border rounded-full bg-cyan-700 text-white px-3 py-1 mr-2">
            Order
          </button>
          <button
            onClick={() => dispatch(clearCart())}
            className="border rounded-full bg-slate-200 text-slate-400 px-2 py-1 hover:bg-cyan-700 hover:text-white transition-all"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

// export default Cart
