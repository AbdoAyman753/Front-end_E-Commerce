import React from "react";
import Loader from "./../components/Loader";
// json-server --watch db.json
const Store = ({ games }) => {
  return (
    <>
      {games.length === 0 && (
        <div className="h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="ms-[20vw] me-[10vw] my-10 justify-items-center  grid grid-rows-1 gap-5 md:grid-cols-3">
        {games.map((game) => (
          <div
            className=" w-[40vw] rounded-3xl  flex flex-col justify-between overflow-hidden shadow-lg  md:w-[20vw]  "
            key={game._id}
          >
            <div className="relative">
              {/* white circle */}
              <div className="absolute   text-red mt-6 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                <div className="w-[5vh] h-[5vh] bg-white  rounded-full shadow-inner shadow-black/80"></div>
              </div>
              {/* image */}
              <img
                className="object-fit  h-[40vh] w-full "
                src={game.imgs_links}
                alt={game.product_name}
              />
            </div>
            <div className="px-6 py-4  h-[17vh]">
              <div className="font-bold text-xl mb-1">{game.product_name}</div>
              <p className="text-gray-700 text-base italic font-serif">
                {game.description}{" "}
              </p>
            </div>
            {/* price */}
            <div className=" pt-4 pb-2 text-right px-4 flex justify-end items-center text-xl">
              <span>{game.price} </span>

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
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            {/* cart and heart */}
            <div></div>
            <div className="  flex justify-end items-center bg-sky-800 border-t-2 ">
              <span className="pe-2 rounded-full  py-1 text-sm font-semibold text-white hover:scale-110  mb-2  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  hover:stroke-sky-300  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </span>

              <span className="pe-2 rounded-full   text-sm font-semibold text-white  hover:scale-110 mb-2">
                {/* heart */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  hover:stroke-sky-300  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </span>
              {/* add to cart */}
              <span className="pe-3 rounded-full  py-1 text-sm font-semibold text-white hover:scale-110  mb-2  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  hover:stroke-sky-300  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* <div className=" my-10 max-w-md mx-auto  overflow-hidden md:max-w-4xl ">
        {games.map((game) => (
          <div key={game._id} className="md:flex mt-10">
            <div className="md:shrink-0">
              <img
                className=" object-fit  md:h-full md:w-40 rounded-lg "
                src={game.imgs_links}
                alt={game.product_name}
              />
            </div>
            <div className="p-8 text-zinc-900 italic font-serif">
              <h2 className=" text-center tracking-wide text-smfont-semibold text-2xl md:text-start">
                {game.product_name}
              </h2>

              <p className="mt-2 w-max-w-[20vw]">{game.description}</p>
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
      </div> */}
    </>
  );
};

export default Store;
