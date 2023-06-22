import React from "react";
import { Sidebar } from "flowbite-react";

const GameFilter = ({ handleFilter, selectedCategoryId, category }) => {
  return (
    <Sidebar.Item
      onClick={() => {
        handleFilter(category.id);
        // setSelectedCategoryId(category.id);
        // setCurrentPage(1);
      }}
      className={`${selectedCategoryId === category.id ? "bg-slate-300" : ""} ${
        selectedCategoryId === category.id && "hover:bg-slate-300"
      } border-2 p-2 mt-1 me-1 w-24 text-center mx-auto font-bold cursor-pointer m-auto`}
    >
      {category.name}
    </Sidebar.Item>
  );
};

export default GameFilter;
