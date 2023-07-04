import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import gameSchema from "./../../models/GameSchema";
import { toast } from "react-toastify";

import { createPortal } from "react-dom";
const EditGame = ({ categories, handleAdminEditGame, id, game }) => {
  const [showModal, setShowModal] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [imgsLinks, setImgsLinks] = useState(game.imgs_links);
  //usenavigate
  const navigate = useNavigate();
  // handleAdminEditGame(game.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(gameSchema),
  });
  useEffect(() => {
    const choosenGame = {
      title: game.product_name,
      description: game.description,
      price: game.price,
      categoryId: game.categoryId,
      recently_added: game.recently_added,
      imgs_links: game.imgs_links,
    };
    reset(choosenGame);
    // console.log(choosenGame);
  }, [game, reset]);

  const handleImageMouseEnter = (index) => {
    setHoveredImageIndex(index);
  };

  const handleImageMouseLeave = () => {
    setHoveredImageIndex(null);
  };

  const handleDeleteImage = (index) => {
    const newImgsLinks = [...imgsLinks];
    newImgsLinks.splice(index, 1);
    setImgsLinks(newImgsLinks);
  };

  // useEffect(() => {
  //   const fetchGame = async () => {
  //     const { data } = await axios.get(`http://localhost:3000/products/${id}`);
  //     console.log(data);
  //     reset({
  //       title: data.product_name,
  //       description: data.description,
  //       price: data.price,
  //       categoryId: data.categoryId,
  //       recently_added: data.recently_added,
  //       imgs_links: data.imgs_links,
  //     });
  //   };
  //   fetchGame();
  // }, [game, reset]);

  const onSubmitHandler = (data) => {
    setShowModal(false);
    const images = [...data.attachment];
    const newImages = images.map((file) => file.name);
    const newImgsLinks = [...imgsLinks, ...newImages];

    const editGame = {
      product_name: data.title,
      description: data.description,
      price: +data.price,
      categoryId: +data.categoryId,
      recently_added: data.recentlyAdded === "true",
      imgs_links: newImgsLinks,
    };
    // console.log(data);
    // console.log(editGame);
    const editProduct = async () => {
      editGame.id = game.id;
      editGame._id = game.id;
      const result = await axios.put(
        `http://localhost:3000/products/${game.id}`,
        editGame
      );
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleAdminEditGame(editGame);
        toast.success("Game updated Sucessfully 😊");
        navigate("/store");
        reset();
      }
    };
    editProduct();
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
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                          <div className="mb-2 flex  justify-between items-center">
                            {/* category */}
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="categoryId"
                              >
                                category
                              </label>

                              <select
                                name="categoryId"
                                id="categoryId"
                                className="shadow appearance-none border rounded w-[40vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register("categoryId", { required: true })}
                              >
                                {categories?.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {/* recentlyAdded */}
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="recentlyAdded "
                              >
                                Recently added
                              </label>

                              <select
                                name="recentlyAdded"
                                id="recentlyAdded"
                                className="shadow appearance-none border rounded w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register("recently_added")}
                              >
                                <option value="true">true</option>
                                <option value="false">false</option>
                              </select>
                            </div>
                          </div>

                          {/* images of game */}
                          <div className="flex flex-wrap gap-1">
                            {imgsLinks.map((image, index) => (
                              <div
                                key={index}
                                className="relative w-[6.5vw] h-10 cursor-pointer"
                                onMouseEnter={() =>
                                  handleImageMouseEnter(index)
                                }
                                onMouseLeave={handleImageMouseLeave}
                              >
                                <img
                                  className="w-full h-full object-cover"
                                  src={image}
                                  alt={`image${index}`}
                                />
                                {hoveredImageIndex === index && (
                                  <button
                                    className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"
                                    onClick={() => handleDeleteImage(index)}
                                  >
                                    X
                                  </button>
                                )}
                              </div>
                            ))}
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
                              className="text-white bg-red-500  hover:bg-red-700 font-bold uppercase px-6 py-3 text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
            </>,
            document.body
          )
        : null}
    </>
  );
};

export default EditGame;
