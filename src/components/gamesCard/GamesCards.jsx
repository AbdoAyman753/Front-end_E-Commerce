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
      <div className="lg:px-[8vw] md:px-[3vw] mx-auto    my-10 justify-center flex flex-wrap   ">
        {filteredGames.map((game) => (
          <div
            className="w-52 xxs:w-72 xs:w-80 my-5 sm:mx-auto mx-10  text-white border-2 border-slate-400 rounded-3xl  flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-slate-400/50   "
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
