import React from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import Picture from "./Picture";
import useAuthenticate from "../utils/useAuthenticate";
import axios from "axios";

const EditProfile = () => {
  const user = useOutletContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token, id } = useAuthenticate();
  const handleOnSubmit = async (data) => {
    console.log(id);
    const response = await axios.patch(
      `http://localhost:8000/users/${id}/`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
  };
  return (
    <div className="m-5 pt-4 sm:mx-auto">
      <Picture />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div>
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User name
              </label>
              <input
                type="text"
                id="user_name"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-auto${
                  errors.username?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                defaultValue={user.user_name}
                {...register("username", { required: "username is required" })}
              />
            </div>
            <span className="text-red-500">{errors.username?.message}</span>
          </div>
          {/* <div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full sm:w-auto${
                  errors.email?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                defaultValue={user.email}
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "enter valid email",
                  },
                })}
              />
            </div>
            <span className="text-red-500">{errors.email?.message}</span>
          </div> */}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
