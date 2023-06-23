/* eslint-disable react/prop-types */
import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="flex border border-cyan-600 p-2">
      <span>
        {item.quantity}x {item.product_name}
      </span>
      <div className="ml-auto">
        <span>${item.price}</span>
        <button className="border-2 border-red-700 bg-red-700 text-white text-sm rounded-full px-2 ml-3 hover:scale-105 transition-all">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
