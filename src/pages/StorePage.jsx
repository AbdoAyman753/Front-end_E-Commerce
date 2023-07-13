import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
import axios from "axios";
import { pagination } from "../utils/Pagination";
import GameFilter from "../components/filter/GameFilter";
import GamesPagination from "../components/pagination/GamesPagination";

import SimpleGameFilter from "../components/filter/SimpleGameFilter";
import SearchBar from "../components/searchBar/SearchBar";
import AddGame from "../components/adminRoles/AddGame";
import useAuthenticate from "../utils/useAuthenticate";
import GamesCards from "./../components/gamesCard/GamesCards";
import URL from "../utils/URL";

const StorePage = () => {
  //ـــــــــــــــــــــــــــــــــ Hooks ـــــــــــــــــــــــــــــــــــــ
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isAdmin } = useAuthenticate();

  //_______________________________________ states___________________________________
  const [games, setGames] = useState([]);
  const [categories, setCategory] = useState([]);
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // searchState
  const [searchKeyword, setSearchKeyword] = useState("");

  // filteruseState
  const [selectedCategory, setselectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState(0);

  // pagination useState
  let [currentPage, setCurrentPage] = useState(1);

  // filter
  let filteredGames =
    selectedCategory === "all"
      ? games
      : games.filter((game) => game.category.includes(selectedCategory));
  if (selectedPrice === 1) {
    filteredGames = filteredGames.filter((game) => game.price <= 10);
  } else if (selectedPrice === 2) {
    filteredGames = filteredGames.filter(
      (game) => game.price > 10 && game.price <= 20
    );
  } else if (selectedPrice === 3) {
    filteredGames = filteredGames.filter((game) => game.price > 20);
  }

  // search
  if (searchKeyword) {
    const keyword = searchKeyword.toLowerCase();
    filteredGames = filteredGames.filter(
      (game) =>
        game.product_name.toLowerCase().includes(keyword) ||
        game.description.toLowerCase().includes(keyword)
    );
  }

  // pagination
  const pageSize = 6;
  const noOfPages = Math.ceil(filteredGames.length / pageSize);
  const pages = pagination(noOfPages);
  const pageStartWith = (currentPage - 1) * pageSize;
  filteredGames = filteredGames.slice(pageStartWith, pageSize + pageStartWith);

  //_______________________________________ handle filter+pagination___________________________________

  // handle pagination
  const handlePagination = (page) => {
    setCurrentPage(page);
    if (currentPage != page) {
      window.scrollTo(0, 0);
    }
  };
  const handleNextPagination = () => {
    setCurrentPage(currentPage < noOfPages ? currentPage + 1 : noOfPages);

    if (currentPage != noOfPages) {
      window.scrollTo(0, 0);
    }
  };
  const handlePrevPagination = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);

    if (currentPage !== 1) {
      window.scrollTo(0, 0);
    }
  };

  // handle category filter
  const handleGategoryFilter = (category) => {
    setselectedCategory(category);
    setCurrentPage(1);
  };
  // handle price filter
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

  //handle Admin roles
  const handleAdminAddGame = (newGame) => {
    // clone
    const newGames = [...games];
    // edit
    newGames.unshift(newGame);
    // setstate
    setGames(newGames);
  };

  const handleAdminEditGame = (editGame) => {
    // clone
    const newGames = [...games];
    const index = newGames.findIndex((game) => game._id == editGame._id);
    newGames[index] = { ...newGames[index], ...editGame };
    // setstate
    setGames(newGames);
  };

  const handleAdminDeleteGame = (deleteGameId) => {
    // clone & edit
    const newGames = games.filter((game) => game._id !== deleteGameId);
    // setstate
    setGames(newGames);
  };

  //_______________________________________ fetch games and categories ___________________________________

  // use effects
  useEffect(() => {
    const fetchGames = async () => {
      // const { data, categoryList } = await axios.get(
      const { data } = await axios.get(`${URL}/products`);
      const { Products, categoryList } = data;
      setIsLoading(false);
      setGames(Products);
      setCategory(categoryList);
    };
    fetchGames();
  }, []);

  // check if data is ready to show or not to show loader
  // loader
  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {/* store games + filter + search bar*/}
      {/* search */}
      <div className=" container flex flex-col flex-wrap ">
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        {/* filter */}
        <div className="flex justify-between  flex-col">
          <SimpleGameFilter
            handleGategoryFilter={handleGategoryFilter}
            selectedCategory={selectedCategory}
            categories={categories}
            setselectedCategory={setselectedCategory}
            setCurrentPage={setCurrentPage}
            handlePriceFilter={handlePriceFilter}
            selectedPrice={selectedPrice}
            filteredGames={filteredGames}
            games={games}
          />
          {/* Add component for Admin */}
          {isAdmin && (
            <AddGame
              categories={categories}
              handleAdminAddGame={handleAdminAddGame}
            />
          )}
          {games.length > 0 && filteredGames.length === 0 ? (
            <div>
              <div className="text-red-500 font-bold w-full text-center my-[20vh]">
                No games match the selected filter condition.
              </div>
            </div>
          ) : (
            <div>
              <div>
                {/* Games cards */}
                <GamesCards
                  handleAdminEditGame={handleAdminEditGame}
                  handleAdminDeleteGame={handleAdminDeleteGame}
                  filteredGames={filteredGames}
                  categories={categories}
                />
              </div>
              {/* pagination component*/}
              <GamesPagination
                handleNextPagination={handleNextPagination}
                handlePagination={handlePagination}
                handlePrevPagination={handlePrevPagination}
                noOfPages={noOfPages}
                pages={pages}
                currentPage={currentPage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StorePage;
