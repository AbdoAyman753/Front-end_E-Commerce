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
      <div className=" mx-auto    my-10 justify-center flex flex-wrap gap-9  ">
        {filteredGames.map((game) => (
          <div
            className="w-11/12  xs:w-[19rem] my-5    text-white border-2 border-slate-400 rounded-3xl  flex flex-col justify-between overflow-hidden hover:shadow-lg hover:shadow-slate-400/50   "
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
