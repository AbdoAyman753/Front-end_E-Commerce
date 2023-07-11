/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, totalPrice } from "../store/slices/cartSlice";
import { order } from "../utils/stripe";
import useAuthenticate from "../utils/useAuthenticate";
import Button from "../components/ui/Button";
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

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const total = useSelector(totalPrice);
  const dispatch = useDispatch();
  const { isAuthenticated, token } = useAuthenticate();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOrder = () => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      setIsLoading(true);
      order(cart, total, token);
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div className="container py-14">
      <Link
        to="/store"
        className="flex items-center text-btn-primary hover:translate-x-[-2px] hover:text-btn-Secondary transition-all"
      >
        <span>{ICON}</span>Back to store
      </Link>
      {cart.length == 0 && (
        <>
          <div className="w-1/5 m-auto mt-16">
            <img className="w-full" src="/emptycart.png" alt="" />
          </div>
          <p className="text-center text-lg">your cart is empty!</p>
        </>
      )}
      {cart.length > 0 && (
        <>
          <div className="border border-secondary-color my-8">
            <div className="flex justify-between bg-secondary-color text-white p-3">
              <p>Your cart, User</p>
              <p>total price ${total.toFixed(2)}</p>
            </div>
            {cart?.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          <Button
            onClick={handleOrder}
            className="bg-cyan-700 text-white px-3 py-1 mr-2 hover:bg-cyan-800"
          >
            {isLoading ? "Loading..." : "Order"}
          </Button>
          {/* <button
            onClick={handleOrder}
            className="border rounded-full bg-cyan-700 text-white px-3 py-1 mr-2"
          >
            {isLoading ? "Loading..." : "Order"}
          </button> */}
          <Button
            onClick={() => dispatch(clearCart())}
            primary={false}
            className="bg-slate-200 text-btn-primary px-2 py-1 hover:text-white border-none"
          >
            Clear Cart
          </Button>
          {/* <button
            onClick={() => dispatch(clearCart())}
            className="border rounded-full bg-slate-200 text-slate-400 px-2 py-1 hover:bg-cyan-700 hover:text-white transition-all"
          >
            Clear Cart
          </button> */}
        </>
      )}
    </div>
  );
};

export default Cart;
