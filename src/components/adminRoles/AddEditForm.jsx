import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import gameSchema from "./../../models/GameSchema";
import useAuthenticate from "../../utils/useAuthenticate";
import { toast } from "react-toastify";
import axios from "axios";
import URL from "../../utils/URL";
const AddEditForm = ({
  setShowModal,
  categories,
  mode,
  handleAdminEditGame,
  handleAdminAddGame,
  game,
}) => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [imgsLinks, setImgsLinks] = useState(game?.imgs_links);
  const { token } = useAuthenticate();
  const [isLoading, setIsLoading] = useState(false);
  //usenavigate
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
  } = useForm({
    resolver: yupResolver(gameSchema),
  });
  useEffect(() => {
    if (mode === "edit") {
      const choosenGame = {
        title: game.product_name,
        description: game.description,
        vendor: game.vendor,
        price: game.price,
        category: game.category,
        imgs_links: game.imgs_links,
      };
      reset(choosenGame);
    }
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
    // _______________________________edit game case_______________________________
    if (mode == "edit") {
      const images = [...data.attachment];
      const newImages = images.map((file) => file.name);
      const formData = new FormData();
      // conert All input type to formdata
      formData.append("product_name", data.title);
      formData.append("description", data.description);
      formData.append("vendor", data.vendor);
      formData.append("price", +data.price);
      formData.append("category", data.category);
      // send the final (current) pictures of game
      formData.append("old_images", JSON.stringify(imgsLinks));
      // send the final (new) pictures of game
      newImages.forEach((image) => {
        formData.append(
          "product_images",
          data.attachment[newImages.indexOf(image)]
        );
      });
      // final total images for game
      const totalImages = [...imgsLinks, ...formData.getAll("product_images")];
      // patch data and test response
      const editProduct = async () => {
        try {
          setIsLoading(true);
          // send edited game
          const result = await axios.patch(
            `${URL}/products/${game._id}`,
            formData,
            {
              headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          // if response is ok
          if (200 <= result.status < 300) {
            // close modal
            setShowModal(false);
            setIsLoading(false);
            const editGame = {
              product_name: data.title,
              description: data.description,
              vendor: data.vendor,
              price: +data.price,
              category: data.category,
              imgs_links: result.data.Product.imgs_links,
              _id: game._id,
            };
            // show the edited data once the admin cliclk submit
            handleAdminEditGame(editGame);
            // show toastify with done
            toast.success("Game updated Sucessfully");
            // navigate to store
            navigate("/store");
            // clear form data
            reset();
          }
          // error cases
        } catch (error) {
          setIsLoading(false);
          // if (error.response?.status === 400) {
          if (totalImages.length > 8) {
            setError("attachment", {
              type: "manual",
              message: "Game Must have only 8 Images",
            });
          } else {
            // Handle other errors here
            setError("error", {
              type: "manual",
              message: "An error occurred while submitting the form",
            });
          }
        }
      };
      editProduct();
    }
    // _______________________________Add game case_______________________________
    else {
      const images = [...data.attachment];
      const newImages = images.map((file) => file.name);
      const formData = new FormData();
      formData.append("product_name", data.title);
      formData.append("description", data.description);
      formData.append("vendor", data.vendor);
      formData.append("price", +data.price);
      formData.append("category", data.category);
      newImages.forEach((image) => {
        formData.append(
          "product_images",
          data.attachment[newImages.indexOf(image)]
        );
      });
      // post data to Api and test response
      const addProduct = async () => {
        try {
          setIsLoading(true);
          const result = await axios.post(`${URL}/products`, formData, {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          });
          // if response is ok
          if (200 <= result.status < 300) {
            setIsLoading(false);
            setShowModal(false);
            const newGame = result.data.createdProduct;
            toast.success("Game Added Successfully");
            handleAdminAddGame(newGame);
            // navigate("/store");
            reset();
          }
        } catch (error) {
          setIsLoading(false);
          // handle error cases
          if (error.response?.status === 400) {
            setError("attachment", {
              type: "manual",
              message: "Must Provide 1 to 8 Images Of Added Game",
            });
          } else {
            // Handle other errors here
            setError("error", {
              type: "manual",
              message: "An error occurred while submitting the form",
            });
          }
        }
      };

      addProduct();
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          <p className="text-red-500 mx-auto">{errors.title?.message}</p>
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
          <p className="text-red-500 mx-auto">{errors.description?.message}</p>
        </div>
        {/* vendor */}
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="vendor"
          >
            Vendor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vendor"
            type="text"
            {...register("vendor", { required: true })}
            placeholder="Game vendor"
          />
          <p className="text-red-500 mx-auto">{errors.vendor?.message}</p>
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
          <p className="text-red-500 mx-auto">{errors.price?.message}</p>
        </div>
        {/* category */}
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            category
          </label>

          <select
            name="category"
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("category", { required: true })}
          >
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {mode === "edit" ? (
          <>
            {/* images of game */}
            <div className="flex gap-1">
              {imgsLinks?.map((image, index) => (
                <div
                  key={index}
                  className="relative w-16 h-10 cursor-pointer"
                  onMouseEnter={() => handleImageMouseEnter(index)}
                  onMouseLeave={handleImageMouseLeave}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={`image${index}`}
                    loading="lazy"
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
          </>
        ) : (
          ""
        )}

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
            placeholder="SVG, PNG, JPG or GIF (MAX: 1MB)"
            // required={mode !== "edit" ? true : false}
            {...register("attachment", {
              required:
                mode === "add" ? "Upload multiple Pics is required" : false,
            })}
          />
          <p
            className="mt-1 ps-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            PNG, JPG or JPEG (MAX: 1MB).
          </p>
          <p className="text-red-500 mx-auto">{errors.attachment?.message}</p>
          <p className="text-red-500 mx-auto">{errors.error?.message}</p>
        </div>
        {/*footer*/}
        <div className="flex flex-col gap-3 items-center justify-evenly p-2  sm:flex-row ">
          <button
            className="text-white  bg-btn-primary order-last sm:order-none    hover:bg-btn-Secondary tracking-widest  px-6 py-3 text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setShowModal(false);
              reset();
              {
                mode == "edit" ? setImgsLinks(game?.imgs_links) : "";
              }
            }}
          >
            CLOSE
          </button>
          <button
            className="bg-emerald-600 w-fit text-white  hover:bg-emerald-500 active:bg-emerald-600 tracking-widest   text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            onClick={handleSubmit(onSubmitHandler)}
          >
            {!isLoading ? "SAVE CHANGES" : "Loading..."}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddEditForm;
