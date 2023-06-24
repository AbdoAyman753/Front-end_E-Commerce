import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
const GameProfile = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchGame = async () => {
      console.log(id);
      const { data } = await axios.get(
        `http://localhost:3000/products?_id=${id}`
      );
      setGame(data);
      console.log(data);
      console.log(game);
    };
    fetchGame();
  }, [id]);
  console.log(game);

  return (
    <div>
      {game.length > 0 ? (
        <div>Game:{game[0].product_name}</div>
      ) : (
        <div>Game not found</div>
      )}
    </div>
  );
};

export default GameProfile;
