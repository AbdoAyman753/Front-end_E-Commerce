import React from "react";

const GamesPagination = ({
  handleNextPagination,
  handlePagination,
  handlePrevPagination,
  noOfPages,
  pages,
  currentPage,
}) => {
  return (
    <ol className="mb-10 flex justify-center gap-1 text-xs font-medium">
      {/* prevPage  */}
      <li>
        {noOfPages > 1 ? (
          <span
            onClick={() => {
              handlePrevPagination();
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded border cursor-pointer border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <title>Previous Page</title>
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ) : (
          ""
        )}
      </li>
      {/* pages  */}
      <li className="flex">
        {pages.length > 1 &&
          pages.map((page) => (
            <span
              onClick={() => {
                handlePagination(page);
              }}
              key={page}
              className={`${
                currentPage === page ? "bg-sky-600" : ""
              }  mx-0.5 cursor-pointer block h-8 w-8 rounded border focus:bg-sky-500 border-gray-100 bg-white text-center leading-8 text-gray-900  `}
            >
              {page}
            </span>
          ))}
      </li>
      {/* nextPage  */}
      <li>
        {noOfPages > 1 ? (
          <span
            onClick={() => {
              handleNextPagination();
            }}
            className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <title>Next Page</title>

              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ) : (
          ""
        )}
      </li>
    </ol>
  );
};

export default GamesPagination;
