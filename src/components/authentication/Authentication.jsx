import React, { Children } from "react";
import { Navigate } from "react-router";
import useAuthenticate from "../../utils/useAuthenticate";

const Authentication = ({ children }) => {
  const { isAuthenticated } = useAuthenticate();

  if (!isAuthenticated) return <Navigate replace to="/sign-in" />;
  return <>{isAuthenticated && children}</>;
};

export default Authentication;
