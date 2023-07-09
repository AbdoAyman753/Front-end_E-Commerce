import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
const CartToggle = ({ game }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isInCart, setIsInCart] = useState(false);
  const [isInLibrary, setIsInLibrary] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(game));
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(game._id));
    setIsInCart(false);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setIsInCart(storedCart.some((storedGame) => storedGame._id == game?._id));
    setIsInLibrary(() => {
      const isInLibrary = user.library
        ? user.library[0].products.some((product) => product._id === game._id)
        : false;
      return isInLibrary;
    });
  }, [game, user]);

  return (
    <>
      {/* add to cart */}
      {!isInCart && !isInLibrary && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 
         hover:stroke-sky-300 "
          onClick={handleAddToCart}
        >
          <title>Add To Cart</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {/* remove from cart */}
      {isInCart && !isInLibrary && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
          onClick={handleRemoveFromCart}
        >
          <title>Remove From Cart</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {/* item in library */}
      {isInLibrary && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <title>Owned In Library </title>

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </>
  );
};

export default CartToggle;
