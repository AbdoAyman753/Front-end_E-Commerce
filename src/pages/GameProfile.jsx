import React from "react";
import axios from "axios";
import Loader from "../components/ui/Loader";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CartToggle from "../components/iconsToggle/CartToggle";
import WishlistToggle from "../components/iconsToggle/WishlistToggle";
import DeleteGame from "./../components/adminRoles/DeleteGame";
import EditGame from "./../components/adminRoles/EditGame";
import useAuthenticate from "./../utils/useAuthenticate";
import { Toggles } from "./../utils/TogglesContext";
const GameProfile = () => {
  const { isAuthenticated } = useAuthenticate();
  const { isAdmin } = useAuthenticate();
  const [isInWishList, setIsInWishList] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // fetch game from Api and stop loading when finish
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/products/${id}`
        );
        setGame(data);
        setSelectedImage(data?.imgs_links);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setGame([]);
      }
    };
    fetchGame();
  }, [id]);
  // slider time interval work each deps list changes
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = game?.imgs_links.indexOf(selectedImage);
      const nextIndex =
        currentIndex === game?.imgs_links.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(game?.imgs_links[nextIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedImage, game]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  // loading during fetch data only
  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  // when there is no game with this id
  if (game.length === 0) {
    return <div>Game not found</div>;
  }

  return (
    <>
      <div className="mx-[5vw] my-10">
        <div className="flex flex-col gap-3 bg-slate-700 border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          {/* image slider */}
          <div className="p-4  border-white">
            <div className="mx-auto ">
              {selectedImage ? (
                <img
                  className="md:w-[50vw] w-full h-52 rounded-md"
                  src={selectedImage}
                  alt=""
                  loading="lazy"
                />
              ) : (
                "Select an image"
              )}
            </div>
            <div className="flex md:w-[50vw]  h-28 overflow-x-auto">
              {game?.imgs_links.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  loading="lazy"
                  className={`w-[12.8vw] md:w-[8vw] h-20 me-1 mt-1 cursor-pointer ${
                    selectedImage === image
                      ? "scale-125 shadow-black shadow-md rounded-md border-gray-300 border-2"
                      : ""
                  }`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
          {/* card body */}
          <div className="flex flex-col justify-evenly md:w-[50vw]">
            <h3 className=" font-extrabold text-4xl text-white   tracking-wider font-mono">
              {game?.product_name}
            </h3>
            <p className=" text-slate-400">{game?.description}</p>
            <p className="text-right me-5 text-xl text-red-500 ">
              {game?.price} $
            </p>
            {/* footer */}
            <div className="flex   gap-2  justify-end me-5 ">
              {/* send gift */}
              {/* {isAdmin && (
                <span className="  rounded-full cursor-pointer   text-sm font-semibold text-white hover:scale-110   ">
                  <EditGame
                    categories={categories}
                    handleAdminEditGame={handleAdminEditGame}
                    id={game.id}
                    game={game}
                  />
                </span>
              )}
              {/* delete icon
              {isAdmin && (
                <span className=" rounded-full cursor-pointer   text-sm font-semibold text-white hover:scale-110   ">
                  <DeleteGame
                    game={game}
                    handleAdminDeleteGame={handleAdminDeleteGame}
                  />
                </span>
              )}{" "}
              */}
              {/* gift icon*/}
              {isAuthenticated && !isAdmin && (
                <span className=" rounded-full cursor-pointer   text-sm font-semibold text-white hover:scale-110   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7  hover:stroke-sky-300  "
                  >
                    <title>Buy Gift</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
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
        </div>
      </div>
    </>
  );
};

export default GameProfile;
