import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import gameSchema from "./../../models/GameSchema";
import { toast } from "react-toastify";
import AddEditForm from "./AddEditForm";

const AddGame = ({ categories, handleAdminAddGame }) => {
  const [showModal, setShowModal] = useState(false);
  //usenavigate
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(gameSchema),
  });
  const onSubmitHandler = (data) => {
    // console.log({ data });
    setShowModal(false);
    const images = [...data.attachment];
    const newImages = images.map((file) => file.name);
    const newGame = {
      product_name: data.title,
      description: data.description,
      price: +data.price,
      category: data.category,
      imgs_links: newImages,
      created_at: Date.now(),
    };
    console.log(newGame);
    const addProduct = async () => {
      const result = await axios.post(
        "http://localhost:8000/products",
        newGame
      );
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleAdminAddGame(newGame);
        toast.success("Game Added Sucessfully 😊");
        navigate("/store");
        reset();
      }
    };
    addProduct();
  };
  return (
    <>
      <div className="text-end">
        <button
          className="w-fit bg-emerald-500 hover:bg-emerald-600 hover:scale-110 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                      <AddEditForm
                        setShowModal={setShowModal}
                        errors={errors}
                        register={register}
                        categories={categories}
                        reset={reset}
                        mode="add"
                      />
                    </form>
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
