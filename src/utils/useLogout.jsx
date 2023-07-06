import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  // const wishlist = useSelector((state) => state.wishlist);

  // const userLogout = () => dispatch(logout({ cart, wishlist }));
  const userLogout = () => dispatch(logout());

  return userLogout;
};

export default useLogout;
