import React from "react";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader";
import axios from "axios";
import { pagination } from "../utils/Pagination";
import GameFilter from "../components/GameFilter";
import GamesPagination from "../components/GamesPagination";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/slices/cartSlice";
// import { addToWishlist } from "../store/slices/wishlistSlice";
import GamesCards from "./../components/GamesCards";
import SimpleGameFilter from "../components/SimpleGameFilter";
import SearchBar from "../components/searchBar/SearchBar";
import AddGame from "../components/adminRoles/AddGame";

const StorePage = () => {
  //_______________________________________ states___________________________________
  const [games, setGames] = useState([]);
  const [categories, setCategory] = useState([]);
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // searchState
  const [searchKeyword, setSearchKeyword] = useState("");
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
  // handle filter
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
  //handle Admin roles
  const handleAdminAddGame = (game) => {
    // clone
    const newGames = [...games];
    // edit
    newGames.push(game);
    // setstate
    setGames(newGames);
  };
  const handleAdminEditGame = (editGme) => {
    // clone
    const newGames = [...games];
    const index = newGames.findIndex((game) => game.id === editGme.id);
    // console.log(newGames[index]);
    newGames[index] = { ...newGames[index], ...editGme };

    // setstate
    setGames(newGames);
  };
  //_______________________________________ fetch games and categories ___________________________________

  // use effects
  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/products?_delay=0"
      );
      setIsLoading(false);
      setGames(data);
    };
    const fetchCategory = async () => {
      const { data } = await axios.get(
        "  http://localhost:3000/category?_delay=0"
      );
      setIsLoading(false);
      setCategory(data);
    };
    fetchGames();
    fetchCategory();
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
      <AddGame
        categories={categories}
        handleAdminAddGame={handleAdminAddGame}
      />
      {/* <AddProduct
        categories={categories}
        games={games}
        handleAdminAddGame={handleAdminAddGame}
      /> */}
      {/* store games and filter*/}
      {games.length > 0 && filteredGames.length === 0 ? (
        <div>
          {/* search */}
          <SearchBar
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
          {/* <div className="flex   ">*/}
          {/* all filter */}
          <SimpleGameFilter
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
          {/* sliderFilter */}
          {/* <GameFilter
            handleGategoryFilter={handleGategoryFilter}
            selectedCategoryId={selectedCategoryId}
            categories={categories}
            setSelectedCategoryId={setSelectedCategoryId}
            setCurrentPage={setCurrentPage}
            handlePriceFilter={handlePriceFilter}
            selectedPrice={selectedPrice}
            filteredGames={filteredGames}
            games={games}
          /> */}
          <div className="text-red-500 font-bold w-full text-center my-[20vh]">
            No games match the selected filter condition.
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-raw flex-wrap xs:flex-row sm:flex-col">
            {/* search */}
            <SearchBar
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
            <SimpleGameFilter
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
            {/* sliderFilter */}
            {/* <div className="flex   ">
          
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
            /> */}
            {/* Games cards */}

            <GamesCards
              handleAdminEditGame={handleAdminEditGame}
              filteredGames={filteredGames}
              categories={categories}
            />
            {/* </div> */}
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
    </>
  );
};

export default StorePage;
