import React from "react";
import { useSelector } from "react-redux";

const useAuthenticate = () => {
  const { token, user } = useSelector((state) => state.auth);
  const isAuthenticated =
    token && (user.role === "user" || user.role === "admin");

  return isAuthenticated;
};

export default useAuthenticate;