/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex border border-cyan-600 p-2">
      <span>{item.product_name}</span>
      <div className="ml-auto">
        <button
          onClick={() => dispatch(removeFromCart(item._id))}
          className="border-2 border-red-700 bg-red-700 text-white text-sm rounded-full px-2 ml-3 hover:scale-105 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
