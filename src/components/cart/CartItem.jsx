/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";
import Button from "../ui/Button";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex border border-[#22778C] p-2 text-white">
      <span>{item.product_name}</span>
      <div className="ml-auto">
        <Button onClick={() => dispatch(removeFromCart(item._id))}>
          Delete
        </Button>
        {/* <button
          onClick={() => dispatch(removeFromCart(item._id))}
          className="border-2 border-red-700 bg-red-700 text-white text-sm rounded-full px-2 ml-3 hover:scale-105 transition-all"
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default CartItem;
