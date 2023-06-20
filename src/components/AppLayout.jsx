/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
