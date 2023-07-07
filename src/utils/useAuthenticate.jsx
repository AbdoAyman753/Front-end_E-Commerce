import React from "react";
import { useSelector } from "react-redux";

const useAuthenticate = () => {
  const { token, user } = useSelector((state) => state.auth);
  const isAuthenticated =
    token && (user.role === "user" || user.role === "admin");
  const isAdmin = user.role === "admin";
  const id = user._id;
  return { isAuthenticated, isAdmin, token, id };

};

export default useAuthenticate;
