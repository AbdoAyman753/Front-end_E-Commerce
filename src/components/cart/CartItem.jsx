/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";
import Button from "../ui/Button";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex border border-secondary-color p-2 text-white">
      <span>{item.product_name}</span>
      <div className="ml-auto">
        <Button onClick={() => dispatch(removeFromCart(item._id))}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
