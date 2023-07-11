/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../store/slices/wishlistSlice";
import { addToCart } from "../../store/slices/cartSlice";
import Button from "../ui/Button";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex border border-cyan-600 p-2 text-white">
      <span>{item.product_name}</span>
      <div className="ml-auto">
        {/* <button
          onClick={() => {
            dispatch(addToCart(item));
            dispatch(removeFromWishlist(item._id));
          }}
          className="border-2 border-cyan-700 bg-cyan-700 text-white text-sm rounded-full px-2 ml-3 hover:scale-105 transition-all"
        >
          Add To Cart
        </button> */}
        <Button
          className="border-cyan-700 bg-cyan-700"
          onClick={() => {
            dispatch(addToCart(item));
            dispatch(removeFromWishlist(item._id));
          }}
        >
          Add To Cart
        </Button>
        <Button onClick={() => dispatch(removeFromWishlist(item._id))}>
          Delete
        </Button>
        {/* <button
          onClick={() => dispatch(removeFromWishlist(item._id))}
          className="border-2 border-red-700 bg-red-700 text-white text-sm rounded-full px-2 ml-3 hover:scale-105 transition-all"
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default WishlistItem;
