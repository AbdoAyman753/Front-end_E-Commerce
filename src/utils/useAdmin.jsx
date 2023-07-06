import React from "react";
import { useSelector } from "react-redux";

const useAdmin = () => {
  const { token, user } = useSelector((state) => state.auth);
  const isAdmin = token && user.role === "admin";

  return isAdmin;
};

export default useAdmin;
