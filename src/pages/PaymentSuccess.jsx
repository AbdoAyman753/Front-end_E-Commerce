import React from "react";
import { Link } from "react-router-dom";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7 text-cyan-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const PaymentSuccess = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <p className="flex text-xl">Payment done successfully {icon}</p>
      <Link className="text-cyan-400 hover:underline" to="/store" replace>
        Go to store
      </Link>
    </div>
  );
};

export default PaymentSuccess;
