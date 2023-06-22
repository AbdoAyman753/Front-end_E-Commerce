/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect, useState } from "react";
import Store from "./pages/Store";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  const [categories, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const handleFilter = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const filteredGames =
    selectedCategoryId === 0
      ? games
      : games.filter((game) => game.categoryId === selectedCategoryId);
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
              handleFilter={handleFilter}
              selectedCategoryId={selectedCategoryId}
              setSelectedCategoryId={setSelectedCategoryId}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
