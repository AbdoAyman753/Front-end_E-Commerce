import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartToggle from "../iconsToggle/CartToggle";
import useAuthenticate from "../../utils/useAuthenticate";
import EditGame from "../adminRoles/EditGame";
import DeleteGame from "../adminRoles/DeleteGame";
import WishlistToggle from "../iconsToggle/WishlistToggle";
import { Toggles } from "../../utils/TogglesContext";
const GameCard = ({
  game,
  handleAdminEditGame,
  categories,
  handleAdminDeleteGame,
}) => {
  const { isAuthenticated } = useAuthenticate();
  const { isAdmin } = useAuthenticate();
  const [isInWishList, setIsInWishList] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  return (
    <>
      <div className="relative">
        <Link to={`/game/${game._id}`}>
          <img
            className="object-fit h-64 w-full bg-slate-600 cursor-pointer hover:scale-105 transition"
            src={game.imgs_links[0]}
            alt={game.product_name}
          />
        </Link>
      </div>
      {/* cardHeader */}
      <div className="px-4 py-1  ">
        <div className="font-bold text-xl text-secondary-color  mb-1">
          {game.product_name}
        </div>
        <div className="flex justify-between">
          <p className="text-sm">
            <span className="">vendor :</span>
            {game.vendor}
          </p>
          {/* new game */}
          {game.created_at &&
          // new game valid from 1 hour
          Date.now() - new Date(game.created_at) <= 1000 * 60 * 60 * 24 ? (
            <div className="flex flex-col justify-center items-center">
              <span className="">
                <img className="w-9 animate-bounce" src="fire2.gif" alt="" />
              </span>
            </div>
          ) : null}
        </div>
      </div>

      {/* description */}
      <div className="px-4 pb-1 h-[6rem]">
        <p className="text-gray-300 text-base italic font-serif">
          {/* {game.description.split(" ").slice(0, 15).join(" ")}... */}
          {`${game.description.slice(0, 100)}...`}
          <Link to={`/game/${game._id}`} className="underline  text-cyan-700">
            {" "}
            See More
          </Link>
        </p>
      </div>
      {/* price */}
      <div className=" pt-5 pb-2 text-right px-4 flex justify-end items-center  text-xl">
        <span>{game.price} </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {/* card footer  */}

      <div className="flex justify-between  bg-secondary-color border-t-2 py-2 items-center">
        <span className="ps-4 text-gray-300 text-base italic font-serif">
          {game.category}
        </span>
        <div className=" px-4 flex flex-row justify-end items-center gap-2 ">
          {/* edit icon*/}
          {isAdmin && (
            <span className="  rounded-full cursor-pointer   text-sm font-semibold text-white hover:scale-110   ">
              <EditGame
                categories={categories}
                handleAdminEditGame={handleAdminEditGame}
                id={game.id}
                game={game}
              />
            </span>
          )}
          {/* delete icon*/}
          {isAdmin && (
            <span className=" rounded-full cursor-pointer   text-sm font-semibold text-white hover:scale-110   ">
              <DeleteGame
                game={game}
                handleAdminDeleteGame={handleAdminDeleteGame}
              />
            </span>
          )}

          <Toggles.Provider
            value={{
              isInWishList,
              setIsInWishList,
              isInCart,
              setIsInCart,
            }}
          >
            {/* heart icon */}
            {isAuthenticated && !isAdmin && (
              <span className=" rounded-full cursor-pointer   text-sm font-semibold text-white  hover:scale-110 ">
                <WishlistToggle game={game} id={game._id} />
              </span>
            )}
            {/* add to cart icon*/}

            {!isAdmin && (
              <span className="rounded-full cursor-pointer   text-sm font-semibold text-white hover:scale-110    ">
                <CartToggle game={game} id={game._id} />
              </span>
            )}
          </Toggles.Provider>
        </div>
      </div>
    </>
  );
};

export default GameCard;
