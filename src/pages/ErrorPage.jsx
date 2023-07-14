import React from "react";
import notFound from "../assets/img/notFound.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const ICON = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 mr-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
  return (
    <div className="container">
      <Link
        to="/"
        className="mb-2 flex items-center text-btn-primary hover:translate-x-[-2px] hover:text-btn-Secondary transition-all"
      >
        <span>{ICON}</span>Back to Home
      </Link>
      <img src={notFound} alt="page-not-found" className="sm:w-full h-[80vh]" />
    </div>
  );
};

export default ErrorPage;
