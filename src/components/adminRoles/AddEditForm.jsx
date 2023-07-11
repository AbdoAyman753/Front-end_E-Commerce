import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import gameSchema from "./../../models/GameSchema";
import useAuthenticate from "../../utils/useAuthenticate";
import { toast } from "react-toastify";
import axios from "axios";
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
    // edit game case
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
          // send edited game
          const result = await axios.patch(
            `http://localhost:8000/products/${game._id}`,
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
            toast.success("Game updated Sucessfully 😊");
            // navigate to store
            navigate("/store");
            // clear form data
            reset();
          }
          // error cases
        } catch (error) {
          // if (error.response?.status === 400) {
          if (totalImages.length > 8) {
            setError("attachment", {
              type: "manual",
              message: "Game Must have only 8 Images",
            });
          } else if (error.response) {
            const { data } = error.response;

            if (data.message) {
              setError("error", {
                type: "manual",
                message: data.message,
              });
            }
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
    // Add game case
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
          const result = await axios.post(
            "http://localhost:8000/products",
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
            setShowModal(false);
            const newGame = result.data.createdProduct;
            toast.success("Game Added Successfully 😊");
            handleAdminAddGame(newGame);
            // navigate("/store");
            reset();
          }
        } catch (error) {
          // handle error cases
          if (error.response?.status === 400) {
            setError("attachment", {
              type: "manual",
              message: "Must Provide 1 to 8 Images Of Added Game",
            });
          } else if (error.response) {
            const { data } = error.response;

            if (data.message) {
              setError("error", {
                type: "manual",
                message: data.message,
              });
            }
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
            <div className="flex flex-wrap gap-1">
              {imgsLinks?.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[6.5vw] h-8 cursor-pointer"
                  onMouseEnter={() => handleImageMouseEnter(index)}
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
        <div className="flex items-center justify-evenly p-2  ">
          <button
            className="text-white bg-red-500  hover:bg-red-700 font-bold uppercase px-6 py-3 text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setShowModal(false);
              reset();
              {
                mode == "edit" ? setImgsLinks(game?.imgs_links) : "";
              }
            }}
          >
            Close
          </button>
          <button
            className="bg-emerald-500 text-white  hover:bg-emerald-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            onClick={handleSubmit(onSubmitHandler)}
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default AddEditForm;
