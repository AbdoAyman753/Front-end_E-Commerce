import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import gameSchema from "./../../models/GameSchema";
import { toast } from "react-toastify";

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
      categoryId: +data.categoryId,
      recently_added: true,
      imgs_links: newImages,
    };
    // console.log(newGame);
    const addProduct = async () => {
      const result = await axios.post(
        "http://localhost:3000/products",
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
                      {/* title */}
                      <div className="mb-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="title"
                        >
                          Title
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="title"
                          type="text"
                          {...register("title", { required: true })}
                          placeholder="Game Title"
                        />
                        <p className="text-red-500 mx-auto">
                          {errors.title?.message}
                        </p>
                      </div>
                      {/* description */}
                      <div className="mb-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="description"
                          type="text"
                          {...register("description", { required: true })}
                          placeholder="Game Description"
                        />
                        <p className="text-red-500 mx-auto">
                          {errors.description?.message}
                        </p>
                      </div>
                      {/* price */}
                      <div className="mb-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="Price"
                        >
                          Price
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="Price"
                          type="text"
                          {...register("price", { required: true })}
                          placeholder="Game Price"
                        />
                        <p className="text-red-500 mx-auto">
                          {errors.price?.message}
                        </p>
                      </div>
                      {/* category */}
                      <div className="mb-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="categoryId"
                        >
                          category
                        </label>

                        <select
                          name="categoryId"
                          id="categoryId"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("categoryId", { required: true })}
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* upload pics */}
                      <div className="mb-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="attachment"
                        >
                          Upload multiple Pics
                        </label>
                        <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="attachment"
                          type="file"
                          multiple
                          required
                          {...register("attachment", {
                            required: "Upload multiple Pics is required",
                          })}
                        />
                        <p
                          className="mt-1 ps-1 text-sm text-gray-500 dark:text-gray-300"
                          id="file_input_help"
                        >
                          SVG, PNG, JPG or GIF (MAX: 1MB).
                        </p>
                        <p className="text-red-500 mx-auto">
                          {errors.attachment?.message}
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-evenly p-2  ">
                        <button
                          className="text-white bg-red-500  hover:bg-red-700 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white  hover:bg-emerald-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save Changes
                        </button>
                      </div>
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
