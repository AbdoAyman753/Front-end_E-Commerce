import React from "react";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader";
import axios from "axios";
import { pagination } from "../utils/Pagination";
import GameFilter from "../components/GameFilter";
import GamesPagination from "../components/GamesPagination";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { addToWishlist } from "../store/slices/wishlistSlice";

const StorePage = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategory] = useState([]);
  const dispatch = useDispatch();

  // filteruseState
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);

  // pagination useState
  let [currentPage, setCurrentPage] = useState(1);

  // filter
  let filteredGames =
    selectedCategoryId === 0
      ? games
      : games.filter((game) => game.categoryId === selectedCategoryId);
  if (selectedPrice === 1) {
    filteredGames = filteredGames.filter((game) => game.price <= 10);
  } else if (selectedPrice === 2) {
    filteredGames = filteredGames.filter(
      (game) => game.price > 10 && game.price <= 20
    );
  } else if (selectedPrice === 3) {
    filteredGames = filteredGames.filter((game) => game.price > 20);
  }
  // pagination
  const pageSize = 6;
  const noOfPages = Math.ceil(filteredGames.length / pageSize);
  // console.log(noOfPages);
  const pages = pagination(noOfPages);
  // console.log(pages);

  const pageStartWith = (currentPage - 1) * pageSize;
  // console.log(pageStartWith);

  filteredGames = filteredGames.slice(pageStartWith, pageSize + pageStartWith);

  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  const handleNextPagination = () => {
    setCurrentPage(currentPage < noOfPages ? currentPage + 1 : noOfPages);
  };
  const handlePrevPagination = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const handleGategoryFilter = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1);
  };

  const handlePriceFilter = (status) => {
    if (status == 0) {
      setSelectedPrice(0);
      setCurrentPage(1);
    }
    if (status == 1) {
      setSelectedPrice(1);
      setCurrentPage(1);
    }
    if (status == 2) {
      setSelectedPrice(2);
      setCurrentPage(1);
    }
    if (status == 3) {
      setSelectedPrice(3);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/products?_delay=0"

      );

      setGames(data);
    };
    const fetchCategory = async () => {
      const { data } = await axios.get(
        "  http://localhost:3000/category?_delay=0"
      );

      setCategory(data);
    };
    fetchGames();
    fetchCategory();
  }, []);

  return (
    <>
      {/* loader */}
      {games.length === 0 && (
        <div className="h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      )}

      {/* store games and filter*/}
      <div className="flex   ">
        {/* all filter */}
        <GameFilter
          handleGategoryFilter={handleGategoryFilter}
          selectedCategoryId={selectedCategoryId}
          categories={categories}
          setSelectedCategoryId={setSelectedCategoryId}
          setCurrentPage={setCurrentPage}
          handlePriceFilter={handlePriceFilter}
          selectedPrice={selectedPrice}
          filteredGames={filteredGames}
          games={games}
        />

        {/* Games cards */}
        <div className="px-[5vw] mx-auto  my-10 justify-items-center  grid grid-rows-1  gap-6   md:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <div
              className=" w-60 rounded-3xl  flex flex-col justify-between overflow-hidden shadow-lg shadow-black/80   "
              key={game._id}
            >
              <div className="relative">
                {/* white circle
                <div className="absolute   text-red mt-6 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                  <div className="w-[5vh] h-[5vh] bg-white  rounded-full shadow-inner shadow-black/80"></div>
                </div> */}
                {/* image */}
                <img
                  className="object-fit h-[30vh] lg:h-[40vh] w-full  "
                  src={game.imgs_links}
                  alt={game.product_name}
                />
              </div>
              <div className="px-4 py-1 h-[20vh] lg:h-[17vh]">
                {/* cardHeader */}
                <div className="flex justify-between items-center">
                  <div className="font-bold text-xl mb-1">
                    {game.product_name}
                  </div>
                  {/* new game */}
                  <span>
                    {game.recently_added == true ? (
                      <div className="flex flex-col justify-center items-center">
                        <span className="">
                          <img
                            className="w-9 animate-bounce "
                            src="fire2.gif"
                            alt=""
                          />
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                {/* description */}
                <p className="text-gray-700  text-base italic font-serif">
                  {game.description}
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

              <div className="flex justify-between  bg-sky-800 border-t-2 py-2 items-center">
                <span className="ps-4 text-gray-300 text-base italic font-serif">
                  {categories
                    .filter((category) => category.id === game.categoryId)
                    .map((category) => category.name)}
                </span>
                <div className=" px-4 flex flex-row justify-end items-center gap-2 ">
                  {/* gift icon*/}
                  <span className=" rounded-full   text-sm font-semibold text-white hover:scale-110   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  hover:stroke-sky-300  "
                    >
                      <title>Buy Gift</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </span>


                    {/* heart icon */}
                    <span
                      onClick={() => dispatch(addToWishlist(game))}
                      className=" rounded-full   text-sm font-semibold text-white  hover:scale-110 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6  hover:stroke-sky-300  cursor-pointer "
                      >
                        <title>Add To WishList</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </span>

                    {/* add to cart icon*/}
                    <span
                      onClick={() => {
                        dispatch(addToCart(game));
                      }}
                      className="rounded-full   text-sm font-semibold text-white hover:scale-110    "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6  hover:stroke-sky-300  "
                      >
                        <title>Add To Cart</title>
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
            // </div>
            //   ))
            //   filteredGames.length > 0 ? (  ) : (
            //   <div className=" text-red-500 font-bold m-auto w-full md:ms-[25vw] col-span-2">
            //     No games match the selected filter condition.
            //   </div>
          ))}
        </div>
      </div>
      {(games.length > 0 && filteredGames.length) == 0 ? (
        <div className=" text-red-500 font-bold w-full md:ms-[25vw] ">
          No games match the selected filter condition.
        </div>
      ) : (
        ""
      )}
      {/* pagination component*/}
      <GamesPagination
        handleNextPagination={handleNextPagination}
        handlePagination={handlePagination}
        handlePrevPagination={handlePrevPagination}
        noOfPages={noOfPages}
        pages={pages}
        currentPage={currentPage}
      />
    </>
  );
};

export default StorePage;
