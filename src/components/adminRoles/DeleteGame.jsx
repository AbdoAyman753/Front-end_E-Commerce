import React, { useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useAuthenticate from "../../utils/useAuthenticate";
import URL from "../../utils/URL";

const DeleteGame = ({ game, handleAdminDeleteGame }) => {
  const [showModal, setShowModal] = useState(false);
  const { token } = useAuthenticate();

  const navigate = useNavigate();

  const handleGameDelete = () => {
    setShowModal(false);

    const deleteProduct = async () => {
      const result = await axios.delete(`${URL}/products/${game._id}`, {
        headers: {
          Authorization: token,
        },
      });
      if (result.status >= 200 && result.status < 300) {
        handleAdminDeleteGame(game._id);
        toast.error("Game Deleted Sucessfully 😊");
        navigate("/store");
      }
    };
    deleteProduct();
  };
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
          className="w-7 h-7  hover:stroke-red-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </span>

      {showModal
        ? createPortal(
            <>
              <div className=" justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none flex">
                <div className="relative w-[80vw]  my-14 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Delete Game!!</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative px-6 py-2">
                      {/* // onSubmit={handleSubmit(onSubmitHandler)} */}
                      <p className=" text-xl text-center font-semibold">
                        <span className=" text-2xl font-bold me-1 text-red-600">
                          Are you sure
                        </span>
                        you want to permanent delete {game.product_name} ?
                      </p>
                      {/*footer*/}
                      <div className="flex items-center justify-evenly p-2  ">
                        <button
                          className="text-white bg-red-500  hover:bg-red-700 font-bold uppercase px-6 py-3 text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal(false);
                          }}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white  hover:bg-emerald-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                          onClick={handleGameDelete}
                        >
                          Save Changes
                        </button>
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

export default DeleteGame;
