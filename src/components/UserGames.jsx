import React from "react";
import { useOutletContext } from "react-router";

const UserGames = () => {
  const { games } = useOutletContext();
  return (
    <div className="w-3/4 sm:w-full m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:ml-2 py-4">
      {games.map((game) => (
        <div key={game._id} className="border p-1 rounded">
          <div className="">
            <img className="w-full h-80" src={game.imgs_links} alt="game" />
          </div>
          <div className="p-3">
            <h3>{game.product_name}</h3>
            <p className="ml-3">{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserGames;
