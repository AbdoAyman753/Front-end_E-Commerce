// import React from "react";
// import { useState } from "react";

// const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
//   //   const [keyword, setKeyword] = useState(searchKeyword || "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const keyword = e.target.value.replace(/^\s+/, "").toLowerCase();
//     setSearchKeyword(keyword);
//     // const searchParams = new URLSearchParams(window.location.search);
//     // searchParams.set("Searchkeyword", keyword);
//     // window.history.pushState({}, "", `?Searchkeyword=${keyword}`);
//     e.target.reset();
//   };

//   const handleSearchChange = (event) => {
//     const keyword = event.target.value.replace(/^\s+/, "").toLowerCase();
//     setSearchKeyword(keyword);
//   };

//   return (
//     <>
//       <form className="w-96 mx-auto my-14" onSubmit={handleSubmit}>
//         <div className="flex">
//           <div className="relative w-full">
//             <input
//               type="search"
//               className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Search for games or description"
//               required
//               autoFocus
//               onChange={handleSearchChange}
//               value={searchKeyword}
//             />
//             <button
//               type="submit"
//               className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 ></path>
//               </svg>
//               <span className="sr-only">Search</span>
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SearchBar;
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
  const schema = yup.object().shape({
    search: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      search: searchKeyword || "",
    },
  });

  const handleSearchChange = (event) => {
    const keyword = event.target.value.trimStart().toLowerCase();
    setSearchKeyword(keyword);
  };

  const onSubmitHandler = (data) => {
    setSearchKeyword(data.search);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("Searchkeyword", data.search);
    window.history.pushState({}, "", `?Searchkeyword=${data.search}`);
    // reset();
  };

  return (
    <>
      <form
        className=" mx-auto ms-5 mt-5"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex">
          <div className="relative w-full ">
            <input
              type="text"
              className="p-2.5 w-40 xs:w-[90vw]   text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for games or description"
              required
              autoFocus
              {...register("search")}
              onChange={handleSearchChange}
            />
            <div className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-sky-700 rounded-r-lg border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
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
        {errors.search && (
          <p className="text-red-500">Please enter a search term.</p>
        )}
      </form>
    </>
  );
};

export default SearchBar;
