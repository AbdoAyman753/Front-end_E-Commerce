import React from "react";

const Button = ({ text }) => {
  return (
    <button className="border-2 border-cyan-500 rounded-full ms-2 px-2 py-1 text-sm text-cyan-200 hover:bg-cyan-500 hover:text-white transition-all">
      {text}
    </button>
  );
};

export default Button;
