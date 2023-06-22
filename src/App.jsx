/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect, useState } from "react";
import Store from "./pages/Store";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { pagination } from "./utils/Pagination";
function App() {
  const [games, setGames] = useState([]);
  const [categories, setCategory] = useState([]);
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

  // const handleFirstPriceFilter = () => {
  //   setSelectedPrice(1);
  //   setCurrentPage(1);
  // };

  // const handle2ndPriceFilter = () => {
  //   setSelectedPrice(2);
  //   setCurrentPage(1);
  // };

  // const handle3rdPriceFilter = () => {
  //   setSelectedPrice(3);
  //   setCurrentPage(1);
  // };

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/products?_delay=0"
        // " mongodb+srv://gameStore_Admin:0WmYnYLaoRFcq4C9@clusteralfa.boytb2g.mongodb.net/"
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
      <Routes>
        <Route
          path="/store"
          element={
            <Store
              games={filteredGames}
              categories={categories}
              handleGategoryFilter={handleGategoryFilter}
              selectedCategoryId={selectedCategoryId}
              setSelectedCategoryId={setSelectedCategoryId}
              handleNextPagination={handleNextPagination}
              handlePagination={handlePagination}
              handlePrevPagination={handlePrevPagination}
              noOfPages={noOfPages}
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              handlePriceFilter={handlePriceFilter}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
