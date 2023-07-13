import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
  const schema = yup.object().shape({
    search: yup.string().required("This Field Is Required"),
  });

  const { register } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      search: searchKeyword || "",
    },
  });

  const handleSearchChange = (event) => {
    const keyword = event.target.value.trimStart().toLowerCase();
    setSearchKeyword(keyword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="  mt-5  " onSubmit={handleSubmit}>
        <div className="flex">
          <div className="relative w-full ">
            <input
              type="text"
              className="p-2.5  w-full   text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for games or description"
              required
              autoFocus
              {...register("search")}
              onChange={handleSearchChange}
            />
            <div className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-secondary-color rounded-r-lg border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
