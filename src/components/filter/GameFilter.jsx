import React from "react";
import { Sidebar } from "flowbite-react";

const GameFilter = ({
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
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example "
          className="w-30 "
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse label="filter">
                <div> Type</div>
                {/* All */}
                <Sidebar.Item
                  onClick={() => {
                    setSelectedCategoryId(0);
                    setCurrentPage(1);
                  }}
                  className={`
                    ${
                      selectedCategoryId === 0
                        ? "bg-slate-300 hover:bg-slate-300"
                        : ""
                    } 
                } border-2 p-2 mt-1 me-1 w-24 text-center  cursor-pointer m-auto`}
                >
                  All
                </Sidebar.Item>
                {/* other Categories  */}
                {categories.map((category) => (
                  <Sidebar.Item
                    onClick={() => {
                      handleGategoryFilter(category.id);
                    }}
                    key={category.id}
                    className={`${
                      selectedCategoryId === category.id
                        ? "bg-slate-300 hover:bg-slate-300"
                        : ""
                    } 
                  } border-2 p-2 mt-1 me-1 w-24 text-center mx-auto  cursor-pointer m-auto`}
                  >
                    {category.name}
                  </Sidebar.Item>
                ))}

                <div>Price</div>

                <Sidebar.Item
                  onClick={() => {
                    handlePriceFilter(0);
                  }}
                  className={`${
                    selectedPrice === 0 ? "bg-slate-300 hover:bg-slate-300" : ""
                  } border-2 p-2 mt-1 me-1 w-24 text-center  cursor-pointer m-auto`}
                >
                  All
                </Sidebar.Item>
                <Sidebar.Item
                  onClick={() => {
                    handlePriceFilter(1);
                  }}
                  className={`${
                    selectedPrice === 1 ? "bg-slate-300 hover:bg-slate-300" : ""
                  } border-2 p-2 mt-1 me-1 w-24 text-center  cursor-pointer m-auto`}
                >
                  1-10$
                </Sidebar.Item>

                <Sidebar.Item
                  onClick={() => {
                    handlePriceFilter(2);
                  }}
                  className={`${
                    selectedPrice === 2 ? "bg-slate-300 hover:bg-slate-300" : ""
                  } border-2 p-2 mt-1 me-1 w-24 text-center  cursor-pointer m-auto`}
                >
                  11-20$
                </Sidebar.Item>
                <Sidebar.Item
                  onClick={() => {
                    handlePriceFilter(3);
                  }}
                  className={`${
                    selectedPrice === 3 ? "bg-slate-300 hover:bg-slate-300" : ""
                  } border-2 p-2 mt-1 me-1 w-24 text-center  cursor-pointer m-auto`}
                >
                  above 20$
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      )}
    </>
  );
};

export default GameFilter;
