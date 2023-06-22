import React from "react";
import { Sidebar } from "flowbite-react";

const GameFilter = ({
  handleGategoryFilter,
  selectedCategoryId,
  categories,
  setCurrentPage,
  setSelectedCategoryId,
  handlePriceFilter,
}) => {
  return (
    <>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example "
        className="w-[15vw] "
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
                    ${selectedCategoryId === 0 ? "bg-slate-300" : ""} ${
                  selectedCategoryId === 0 && "hover:bg-slate-300"
                } border-2 p-2 mt-1 me-1 w-24 text-center font-bold cursor-pointer m-auto`}
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
                    selectedCategoryId === category.id ? "bg-slate-300" : ""
                  } ${
                    selectedCategoryId === category.id && "hover:bg-slate-300"
                  } border-2 p-2 mt-1 me-1 w-24 text-center mx-auto font-bold cursor-pointer m-auto`}
                >
                  {category.name}
                </Sidebar.Item>
              ))}

              <div>Price</div>

              <Sidebar.Item
                onClick={() => {
                  handlePriceFilter(0);
                }}
                className={`
                    border-2 p-2 mt-1 me-1 w-24 text-center font-bold cursor-pointer m-auto`}
              >
                All
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => {
                  handlePriceFilter(1);
                }}
                className={`
                    border-2 p-2 mt-1 me-1 w-24 text-center font-bold cursor-pointer m-auto`}
              >
                1-10$
              </Sidebar.Item>

              <Sidebar.Item
                onClick={() => {
                  handlePriceFilter(2);
                }}
                className={`
                     border-2 p-2 mt-1 me-1 w-24 text-center font-bold cursor-pointer m-auto`}
              >
                11-20$
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => {
                  handlePriceFilter(3);
                }}
                className={`
                     border-2 p-2 mt-1 me-1 w-24 text-center font-bold cursor-pointer m-auto`}
              >
                above 20$
              </Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default GameFilter;
