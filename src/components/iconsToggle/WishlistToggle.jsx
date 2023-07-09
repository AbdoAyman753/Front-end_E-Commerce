import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistSlice";
import { removeFromCart } from "../../store/slices/cartSlice";

import { useSelector } from "react-redux";
import { Toggles } from "../../utils/TogglesContext";

const WishlistToggle = ({ game }) => {
  const {
    isInWishList,
    setIsInWishList,
    isInCart,
    setIsInCart,
    handleInCart,
    handleInWishList,
  } = useContext(Toggles);
  const dispatch = useDispatch();
  // const [isInWishList, setIsInWishList] = useState(false);
  const [isInLibrary, setIsInLibrary] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleToggle = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const newWishlist = [...storedWishlist];
    const index = newWishlist.findIndex(
      (storedGame) => storedGame._id === game._id
    );

    if (index === -1) {
      // add to WishList
      newWishlist.push(game);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      dispatch(addToWishlist(game));
      dispatch(removeFromCart(game._id));
      setIsInWishList(true);
      setIsInCart(false);
    } else {
      // remove from WishList
      newWishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      dispatch(removeFromWishlist(game._id));
      setIsInWishList(false);
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishList(
      storedCart.some((storedGame) => storedGame._id == game?._id)
    );
    setIsInLibrary(() => {
      const isInLibrary = user.library
        ? user.library[0].products.some((product) => product._id === game._id)
        : false;
      return isInLibrary;
    });
  }, [game, user]);
  return (
    <>
      {!isInLibrary && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isInWishList ? "#b91c1c" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7  hover:stroke-sky-300  cursor-pointer "
          onClick={handleToggle}
        >
          <title>Add To WishList</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      )}
    </>
  );
};

export default WishlistToggle;
