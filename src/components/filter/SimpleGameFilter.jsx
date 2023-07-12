import React from "react";
import Button from "../ui/Button";
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
        <div className=" mx-auto mt-10 md:mt-4  ">
          {/* category filter  */}
          <div className=" gap-3 flex flex-col md:flex md:flex-row  md:gap-1 md:mt-2 ">
            <Button
              primary={selectedCategory == "all" ? true : false}
              onClick={() => {
                setselectedCategory("all");
                setCurrentPage(1);
              }}
              className={`  ${
                selectedCategory == "all"
                  ? " hover:text-slate-300  shadow-slate-700 shadow-md"
                  : ""
              }  xs:ms-3 md:ms-0 md:h-20  outline md:w-40 w-44 outline-btn-primary outline-1 hover:outline-white  font-medium  text-center mr-3 mb-3`}
            >
              All categories
            </Button>

            <div className="  xs:ms-3 flex flex-col gap-3  items-start  md:grid  md:grid-cols-3 md:gap-1 flex-wrap md:justify-start">
              {categories.map((category, index) => (
                <Button
                  primary={selectedCategory == category ? true : false}
                  key={index}
                  onClick={() => {
                    handleGategoryFilter(category);
                  }}
                  className={`${
                    selectedCategory === category
                      ? " hover:text-slate-300 hover:outline-0 shadow-slate-700 shadow-md"
                      : ""
                  }  outline md:w-auto w-44 outline-btn-primary outline-1 hover:outline-white  font-medium  text-center mr-3 mb-3`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          {/* price filter  */}
          <div className="border-t-2 border-slate-400 md:border-none flex flex-col gap-3 items-start  md:flex-row md:justify-start md:gap-1  py-2">
            <Button
              primary={selectedPrice === 0 ? true : false}
              onClick={() => {
                handlePriceFilter(0);
              }}
              className={`  ${
                selectedPrice === 0
                  ? "   hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              } md:me-6 xs:ms-3 md:ms-0 outline  md:w-40 w-44 outline-btn-primary outline-1 hover:outline-white  font-medium  text-center mr-3 mb-3`}
            >
              All Prices
            </Button>

            <Button
              primary={selectedPrice === 1 ? true : false}
              onClick={() => {
                handlePriceFilter(1);
              }}
              className={`${
                selectedPrice === 1
                  ? "   hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              }  xs:ms-3 md:ms-0 outline  md:w-40 w-44 outline-btn-primary outline-1 hover:outline-white  font-medium  text-center mr-3 mb-3`}
            >
              1-10$
            </Button>

            <Button
              primary={selectedPrice === 2 ? true : false}
              onClick={() => {
                handlePriceFilter(2);
              }}
              className={`${
                selectedPrice === 2
                  ? "   hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              }  xs:ms-3 md:ms-0 outline  md:w-40 w-44 outline-btn-primary outline-1 hover:outline-white  font-medium  text-center mr-3 mb-3`}
            >
              11-20${" "}
            </Button>

            <Button
              primary={selectedPrice === 3 ? true : false}
              onClick={() => {
                handlePriceFilter(3);
              }}
              className={`${
                selectedPrice === 3
                  ? "   hover:text-slate-300  hover:outline-0 shadow-slate-700 shadow-md"
                  : ""
              } xs:ms-3 md:ms-0 md outline  md:w-40 w-44 outline-btn-primary outline-1 hover:outline-white  font-medium  text-center mr-3 mb-3`}
            >
              above 20$
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleGameFilter;
