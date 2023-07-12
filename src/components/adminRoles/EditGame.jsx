import React, { useEffect, useState } from "react";
import AddEditForm from "./AddEditForm";
import { createPortal } from "react-dom";
const EditGame = ({ categories, handleAdminEditGame, id, game }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span
        className="    ease-linear transition-all duration-150"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7  hover:stroke-sky-300 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </span>

      {showModal
        ? createPortal(
            <>
              <div className=" justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none flex">
                <div className="relative w-[80vw]  my-14 mx-auto max-w-3xl">
                  {/*content*/}
                  <div
                    style={{ maxHeight: "95vh", overflowY: "auto" }}
                    className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                  >
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Edit Game</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative px-6 py-2">
                      <div className="w-full  ">
                        <AddEditForm
                          setShowModal={setShowModal}
                          categories={categories}
                          mode="edit"
                          handleAdminEditGame={handleAdminEditGame}
                          game={game}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>,
            document.body
          )
        : null}
    </>
  );
};

export default EditGame;
