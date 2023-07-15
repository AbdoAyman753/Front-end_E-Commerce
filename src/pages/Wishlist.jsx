/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishlistItem from "../components/wishlist/WishlistItem";
import { clearWishlist } from "../store/slices/wishlistSlice";
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

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  return (
    <div className="container py-14">
      <Link
        to="/store"
        className="flex items-center text-btn-primary hover:translate-x-[-2px] hover:text-btn-Secondary transition-all"
      >
        <span>{ICON}</span>Back to store
      </Link>
      {wishlist.length == 0 && (
        <>
          <div className="w-1/3 m-auto mt-16">
            <img className="w-full" src="/empty-wishlist.png" alt="" />
          </div>
          <p className="text-center text-lg text-white">
            your wishlist is empty!
          </p>
        </>
      )}
      {wishlist.length > 0 && (
        <>
          <div className="border border-secondary-color my-8">
            <div className="flex justify-between bg-secondary-color text-white p-3">
              <p>Your wishlist, User</p>
            </div>
            {wishlist?.map((item) => (
              <WishlistItem key={item._id} item={item} />
            ))}
          </div>
          <Button
            onClick={() => dispatch(clearWishlist())}
            primary={false}
            className="px-2 py-1 text-btn-primary hover:text-white bg-red-400 border-none"
          >
            Clear Wishlist
          </Button>
        </>
      )}
    </div>
  );
};

export default Wishlist;
