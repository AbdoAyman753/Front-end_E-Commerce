/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children, className = "" }) => {
  return (
    <div>
      <Header />
      <div className={`${className} min-h-[80vh]`}>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
