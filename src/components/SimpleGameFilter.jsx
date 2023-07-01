import React from "react";
// json-server --watch db.json
const SimpleGameFilter = ({
  handleGategoryFilter,
  selectedCategoryId,
  categories,
  setCurrentPage,
  setSelectedCategoryId,
  handlePriceFilter,
  selectedPrice,
  filteredGames,
  games,
}) => {
  return (
    <>
      {games.length > 0 && (
        <div className="mx-5 xs:mx-0">
          <div className="  xs:ms-3 flex flex-col  sm:flex-row items-start justify-center mt-2">
            <button
              onClick={() => {
                setSelectedCategoryId(0);
                setCurrentPage(1);
              }}
              type="button"
              className={`  ${
                selectedCategoryId === 0
                  ? "bg-sky-800  text-white hover:bg-sky-300  hover:text-sky-700  hover:outline-0 shadow-slate-900 shadow-md"
                  : ""
              }  hover:border-sky-600 hover:outline hover:outline-1 hover:outline-slate-400 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
            >
              All categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  handleGategoryFilter(category.id);
                }}
                className={`${
                  selectedCategoryId === category.id
                    ? "bg-sky-800  text-white hover:bg-sky-300  hover:text-sky-700  hover:outline-0 shadow-slate-900 shadow-md"
                    : ""
                } hover:border-sky-600 hover:outline hover:outline-1 hover:outline-slate-400 rounded-full  text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="border-t-2 sm:border-none flex flex-col  xs:ms-3 sm:flex-row items-center justify-center py-2">
            <button
              onClick={() => {
                handlePriceFilter(0);
              }}
              type="button"
              className={`  ${
                selectedPrice === 0
                  ? "bg-sky-800  text-white hover:bg-sky-300  hover:text-sky-700  hover:outline-0 shadow-slate-900 shadow-md"
                  : ""
              }  hover:border-sky-600 hover:outline hover:outline-1 hover:outline-slate-400 rounded-full  text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
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
                  ? "bg-sky-800  text-white hover:bg-sky-300  hover:text-sky-700  hover:outline-0 shadow-slate-900 shadow-md"
                  : ""
              } hover:border-sky-600 hover:outline hover:outline-1 hover:outline-slate-400 rounded-full  text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
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
                  ? "bg-sky-800  text-white hover:bg-sky-300  hover:text-sky-700  hover:outline-0 shadow-slate-900 shadow-md"
                  : ""
              } hover:border-sky-600 hover:outline hover:outline-1 hover:outline-slate-400 rounded-full  text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
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
                  ? "bg-sky-800  text-white hover:bg-sky-300  hover:text-sky-700  hover:outline-0 shadow-slate-900 shadow-md"
                  : ""
              } hover:border-sky-600 hover:outline hover:outline-1 hover:outline-slate-400 rounded-full  text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
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
