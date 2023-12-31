import React, { useState } from "react";
import AddEditForm from "./AddEditForm";
const AddGame = ({ categories, handleAdminAddGame }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" text-center mt-10">
        <button
          className="outline md:w-auto w-44 outline-emerald-500 outline-1  font-medium text-center mr-3 mb-3
          hover:bg-emerald-600 hover:scale-110 text-white active:bg-emerald-600 uppercase  px-3 py-2
           rounded-lg shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Game
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none flex">
            <div className="relative w-[80vw]  my-14 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Game</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-2">
                  <div className="w-full ">
                    <AddEditForm
                      setShowModal={setShowModal}
                      handleAdminAddGame={handleAdminAddGame}
                      categories={categories}
                      mode="add"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddGame;
