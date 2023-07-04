import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import gameSchema from "./../../models/GameSchema";
import { toast } from "react-toastify";
import AddEditForm from "./AddEditForm";

import { createPortal } from "react-dom";
const EditGame = ({ categories, handleAdminEditGame, id, game }) => {
  const [showModal, setShowModal] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [imgsLinks, setImgsLinks] = useState(game.imgs_links);
  //usenavigate
  const navigate = useNavigate();
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
                          <AddEditForm
                            setShowModal={setShowModal}
                            errors={errors}
                            register={register}
                            categories={categories}
                            reset={reset}
                            mode="edit"
                            handleDeleteImage={handleDeleteImage}
                            handleImageMouseLeave={handleImageMouseLeave}
                            handleImageMouseEnter={handleImageMouseEnter}
                            imgsLinks={imgsLinks}
                            hoveredImageIndex={hoveredImageIndex}
                            setImgsLinks={setImgsLinks}
                            game={game}
                          />
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
