import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const userLogout = () => dispatch(logout());

  return userLogout;
};

export default useLogout;
