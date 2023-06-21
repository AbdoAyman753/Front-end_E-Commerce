import React, { useState } from "react";

import Loader from "./../components/Loader";
import { pagination } from "../utils/pagination";
// json-server --watch db.json
const pageSize = 3;
const Store = ({ games, categories }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // filter
  let filteredGames =
    selectedCategoryId === 0
      ? games
      : games?.filter((d) => d.categoryId === selectedCategoryId);
  // pagination
  const noOfPages = Math.ceil(filteredGames.length / pageSize);

  const pages = pagination(noOfPages);

  const pageStartWith = (currentPage - 1) * pageSize;

  filteredGames = filteredGames.slice(pageStartWith, pageSize + pageStartWith);
  return (
    <>
      {/* loader */}
      {games.length === 0 && (
        <div className="h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      )}
      {/* all filter */}
      <div className="flex flex-row justify-center">
        {/* filter */}
        <div className=" px-[5vw] h-10   flex items-center  ">
          {/* all   */}
          <div
            onClick={() => {
              setSelectedCategoryId(0);
              setCurrentPage(1);
            }}
            className={`${
              selectedCategoryId === 0 ? "bg-slate-300" : ""
            } border-2 mt-3 me-1 p-2 text-center font-bold cursor-pointer`}
          >
            All
          </div>
          {/* others filters */}
          {categories.map((category) => (
            <div
              onClick={() => {
                setSelectedCategoryId(category.id);
                setCurrentPage(1);
              }}
              key={category.id}
              className={`${
                selectedCategoryId === category.id ? "bg-slate-300" : ""
              } border-2 p-2 mt-3 me-1 text-center font-bold cursor-pointer`}
            >
              {category.name}
            </div>
          ))}
        </div>
        {/* filter arrow */}
        {/* <div className=" w-6 py-[40vh] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-bounce "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div> */}
      </div>

      <div className="flex   justify-center">
        {/* store games */}
        <div className="px-[5vw]  my-10 justify-items-center  grid grid-rows-1 gap-4 md:grid-cols-3">
          {filteredGames.map((game) => (
            <div
              className=" w-[40vw] rounded-3xl  flex flex-col justify-between overflow-hidden shadow-lg shadow-black/80  lg:w-[20vw] md:w-[25vw] "
              key={game._id}
            >
              <div className="relative">
                {/* white circle */}
                <div className="absolute   text-red mt-6 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                  <div className="w-[5vh] h-[5vh] bg-white  rounded-full shadow-inner shadow-black/80"></div>
                </div>
                {/* image */}
                <img
                  className="object-fit h-[30vh] lg:h-[40vh] w-full  "
                  src={game.imgs_links}
                  alt={game.product_name}
                />
              </div>
              <div className="px-6 py-4 h-[20vh] lg:h-[17vh]">
                <div className="font-bold text-xl mb-1">
                  {game.product_name}
                </div>
                <p className="text-gray-700  text-base italic font-serif">
                  {game.description}{" "}
                </p>
              </div>
              {/* price */}
              <div className=" pt-10 pb-2 text-right px-4 flex justify-end items-center  text-xl">
                <span>{game.price} </span>

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
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              {/* card footer  */}

              <div className="flex justify-between  bg-sky-800 border-t-2 items-center">
                <span className="ps-3 text-gray-300 text-base italic font-serif">
                  {categories
                    .filter((category) => category.id === game.categoryId)
                    .map((category) => category.name)}
                </span>
                <div className="  flex flex-row justify-end items-center ">
                  <span className="pe-2 rounded-full  py-1 text-sm font-semibold text-white hover:scale-110  mb-2  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  hover:stroke-sky-300  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </span>

                  <span className="pe-2 rounded-full   text-sm font-semibold text-white  hover:scale-110 mb-2">
                    {/* heart */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  hover:stroke-sky-300  cursor-pointer "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </span>
                  {/* add to cart */}
                  <span className="pe-3 rounded-full  py-1 text-sm font-semibold text-white hover:scale-110  mb-2  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  hover:stroke-sky-300  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* pagination */}
      <div className="flex gap-2 mx-96 ">
        {pages.length > 1 &&
          pages.map((page) => (
            <div
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`${
                currentPage === page ? "bg-slate-300" : ""
              } cursor-pointer border-2 p-2 h-10`}
            >
              {page}
            </div>
          ))}
      </div>
    </>
  );
};

export default Store;
