import React, { useState } from "react";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <nav
      className={`bg-cyan-950 text-cyan-300 ${
        isCollapsed ? "pb-3" : "pb-48"
      } pt-3 sm:pb-3`}
    >
      <div className="container">
        <div className="flex items-center relative">
          {/* logo  */}
          <div className="text-lg">logo</div>

          {/* collapse button  */}
          <button
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="block items-center px-3 py-2 border rounded text-cyan-200 border-cyan-400 hover:text-white hover:border-white ml-auto sm:hidden"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* links  */}
          <div
            className={`${
              isCollapsed ? "hidden" : ""
            } absolute w-100 top-5 sm:block sm:relative py-5 pl-5 sm:text-center sm:top-0 grow bg-inherit `}
          >
            <ul className="sm:flex justify-between w-72 ml-auto">
              <li className="hover:text-cyan-500 pt-2">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-cyan-500 pt-2">
                <a href="/">Store</a>
              </li>
              <li className="hover:text-cyan-500 pt-2">
                <a href="/">Support</a>
              </li>
              <li className="hover:text-cyan-500 pt-2">
                <a href="/">About</a>
              </li>
              <li className="hover:text-cyan-500 pt-2">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
