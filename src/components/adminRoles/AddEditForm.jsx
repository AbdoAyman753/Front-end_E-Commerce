import React from "react";

const AddEditForm = ({
  setShowModal,
  register,
  errors,
  categories,
  reset,
  mode,
  handleDeleteImage,
  handleImageMouseLeave,
  handleImageMouseEnter,
  imgsLinks,
  hoveredImageIndex,
  setImgsLinks,
  game,
}) => {
  return (
    <>
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
      {mode === "add" ? (
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
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <>
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
            {imgsLinks?.map((image, index) => (
              <div
                key={index}
                className="relative w-[6.5vw] h-10 cursor-pointer"
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
        <p className="text-red-500 mx-auto">{errors.attachment?.message}</p>
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
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default AddEditForm;
