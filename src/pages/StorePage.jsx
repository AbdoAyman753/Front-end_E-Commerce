import React from "react";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader";
import axios from "axios";
import { pagination } from "../utils/Pagination";
import GameFilter from "../components/GameFilter";
import GamesPagination from "../components/GamesPagination";
import { useDispatch } from "react-redux";
// import { addToCart } from "../store/slices/cartSlice";
// import { addToWishlist } from "../store/slices/wishlistSlice";
import GamesCards from "./../components/GamesCards";

const StorePage = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategory] = useState([]);
  // const dispatch = useDispatch();

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
        <GamesCards filteredGames={filteredGames} categories={categories} />
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
