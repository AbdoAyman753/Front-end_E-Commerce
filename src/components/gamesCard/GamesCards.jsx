import React from "react";

import GameCard from "./GameCard";
const GamesCards = ({
  categories,
  filteredGames,
  handleAdminEditGame,
  handleAdminDeleteGame,
}) => {
  return (
    <>
      <div className="md:px-[8vw] mx-auto   my-10 justify-items-center  grid grid-rows-1  gap-4   md:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((game) => (
          <div
            className=" w-60 xs:w-72 text-white border-2 border-slate-400 rounded-3xl  flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-slate-400/50   "
            key={game._id}
          >
            <GameCard
              game={game}
              handleAdminEditGame={handleAdminEditGame}
              categories={categories}
              handleAdminDeleteGame={handleAdminDeleteGame}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GamesCards;
