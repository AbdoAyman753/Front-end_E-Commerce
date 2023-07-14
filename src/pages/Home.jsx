import React from "react";
import Carousel from "../components/homepage/Carousel";
import Slider from "../components/homepage/Slider";
import { useState, useEffect } from "react";
import axios from "axios";
import HomeImg from "../components/homepage/HomeImg";
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
      <HomeImg />
      <Carousel />
      <Slider/>
    </>
  );
};

export default Home;
