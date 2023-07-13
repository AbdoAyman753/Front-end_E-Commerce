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
import URL from "../utils/URL";
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
        const { data } = await axios.get(`${URL}/products/${id}`);
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
      <div className="container my-10">
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
