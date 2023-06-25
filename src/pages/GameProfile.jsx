import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router";

const GameProfile = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      // console.log(id);
      const { data } = await axios.get(
        `http://localhost:3000/products?_id=${id}`
      );
      setGame(data);
      // console.log(data);
      // console.log(game);
      setSelectedImage(data[0].imgs_links[0]); // set the default selected image to the first image link
    };
    fetchGame();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = game[0].imgs_links.indexOf(selectedImage);
      const nextIndex =
        currentIndex === game[0].imgs_links.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(game[0].imgs_links[nextIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedImage, game]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="mx-[5vw] my-10">
        {game.length > 0 ? (
          <div className="flex flex-col gap-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {/* gameSlider */}
            <div className="p-4">
              <div className="mx-auto">
                {selectedImage ? (
                  <img
                    className="md:w-[50vw] w-full h-52"
                    src={selectedImage}
                    alt=""
                  />
                ) : (
                  "Select an image"
                )}
              </div>
              <div className="flex md:w-[50vw] w-full">
                {game[0].imgs_links.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className={`w-[12.8vw] md:w-[7.16vw] h-14 cursor-pointer ${
                      selectedImage === image
                        ? "scale-125 shadow-black shadow-md rounded-lg"
                        : ""
                    }`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>
            {/* card body */}
            <div className="flex flex-col justify-evenly ">
              <h3 className="font-bold"> {game[0].product_name}</h3>
              <p className="">{game[0].description}</p>
              <p className="text-right">{game[0].price} $</p>
            </div>
          </div>
        ) : (
          <div>Game not found</div>
        )}
      </div>
    </>
  );
};

export default GameProfile;
