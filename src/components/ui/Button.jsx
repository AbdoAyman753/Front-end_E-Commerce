import React from "react";

const Button = ({ children, primary = true, className = "", onClick }) => {
  const clickHandler = () => {
    if (onClick) onClick();
  };
  return (
    <button
      onClick={() => clickHandler()}
      className={`${
        primary
          ? "bg-btn-primary hover:bg-btn-Secondary"
          : "border-2 border-btn-Secondary hover:bg-btn-primary"
      } rounded-lg px-2 py-1 text-md text-white transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
