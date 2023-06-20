import React from "react";
import Loader from "./../components/Loader";

const Store = ({ games }) => {
  return (
    <>
      {games.length === 0 && (
        <div className="h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className=" my-10 max-w-md mx-auto  overflow-hidden md:max-w-6xl ">
        {games.map((game) => (
          <div key={game._id} className="md:flex mt-10">
            <div className="md:shrink-0">
              <img
                className=" object-cover md:h-full md:w-96 rounded-lg"
                src={game.imgs_links}
                alt={game.product_name}
              />
            </div>
            <div className="p-8 text-zinc-900 italic font-serif">
              <h2 className=" text-center tracking-wide text-smfont-semibold text-2xl md:text-start">
                {game.product_name}
              </h2>

              <p className="mt-2">{game.description}</p>
              <div className=" mt-5">
                <h3>{game.price} $</h3>
              </div>
              <div className=" flex cursor-pointer justify-end items-center">
                <span>Add to cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className=" grid grid-cols-4 gap-5 ms-10 me-10 mt-20 ">
        {games.map((game) => (
          <div key={game._id} className="text-center">
            <img src={game.Profile} alt={game.Name} className="h-[20rem]" />
            <h3 className="font-bold">{game.Name}</h3>
            <p className="italic font-serif">{game.Description}</p>
            <span className="font-bold text-xl ">{game.Price} $</span>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Store;
