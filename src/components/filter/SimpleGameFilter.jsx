import React from "react";

// json-server --watch db.json

const SimpleGameFilter = ({
  handleGategoryFilter,

  selectedCategory,

  categories,

  setCurrentPage,

  setselectedCategory,

  handlePriceFilter,

  selectedPrice,

  filteredGames,

  games,
}) => {
  return (
    <>
      {games.length > 0 && (
        <div className="mx-5 xs:mx-auto ">
          {/* category filter  */}

          <div className="  xs:ms-3 flex flex-col  sm:flex-row sm:justify-start items-start justify-center mt-2">
            <button
              onClick={() => {
                setselectedCategory("all");
                setCurrentPage(1);
              }}
              type="button"
              className={`  ${
                selectedCategory == "all"
                  ? "bg-btn-primary  text-white hover:bg-btn-secondary  hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              }  hover:border-btn-primary text-white outline outline-btn-primary outline-1 hover:outline-white hover:bg-red-600 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
            >
              All categories
            </button>

            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  handleGategoryFilter(category);
                }}
                className={`${
                  selectedCategory === category
                    ? "bg-btn-primary  text-white hover:bg-btn-secondary  hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                    : ""
                }  hover:border-btn-primary text-white outline outline-btn-primary outline-1 hover:outline-white hover:bg-red-600 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
              >
                {category}
              </button>
            ))}
          </div>
          {/* price filter  */}
          <div className="border-t-2 sm:border-none flex flex-col  xs:ms-3 sm:flex-row sm:justify-start  items-start justify-center py-2">
            <button
              onClick={() => {
                handlePriceFilter(0);
              }}
              type="button"
              className={`  ${
                selectedPrice === 0
                  ? "bg-btn-primary  text-white hover:bg-btn-secondary  hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              }  hover:border-btn-primary text-white outline outline-btn-primary outline-1 hover:outline-white hover:bg-red-600 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
            >
              All Prices
            </button>

            <button
              type="button"
              onClick={() => {
                handlePriceFilter(1);
              }}
              className={`${
                selectedPrice === 1
                  ? "bg-btn-primary  text-white hover:bg-btn-secondary  hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              }  hover:border-btn-primary text-white outline outline-btn-primary outline-1 hover:outline-white hover:bg-red-600 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
            >
              1-10$
            </button>

            <button
              type="button"
              onClick={() => {
                handlePriceFilter(2);
              }}
              className={`${
                selectedPrice === 2
                  ? "bg-btn-primary  text-white hover:bg-btn-secondary  hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              }  hover:border-btn-primary text-white outline outline-btn-primary outline-1 hover:outline-white hover:bg-red-600 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
            >
              11-20${" "}
            </button>

            <button
              type="button"
              onClick={() => {
                handlePriceFilter(3);
              }}
              className={`${
                selectedPrice === 3
                  ? "bg-btn-primary  text-white hover:bg-btn-secondary  hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              }  hover:border-btn-primary text-white outline outline-btn-primary outline-1 hover:outline-white hover:bg-red-600 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
            >
              above 20$
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleGameFilter;
