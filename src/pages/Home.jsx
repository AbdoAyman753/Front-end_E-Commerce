import React from "react";
import Carousel from "../components/Carousel";
import Slider from "../components/Slider";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../utils/URL";
const Home = () => {
  // const [games, setGames] = useState("");

  // const fitchRecentGames = async () => {
  //   const { data } = await axios.get(`${URL}/products/newest`);
  //   setGames(data.newestTenProducts);
  // };
  // useEffect(() => {
  //   fitchRecentGames();
  // }, []);
  return (
    <>
      <Carousel />
      <Slider /*recentGames={games}*/ />
    </>
  );
};

export default Home;
