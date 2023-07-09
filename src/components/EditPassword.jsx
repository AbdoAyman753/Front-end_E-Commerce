import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuthenticate from "../utils/useAuthenticate";

const EditPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { token, id } = useAuthenticate();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.patch(
        `http://localhost:8000/users/${id}/changePassword`,
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsLoading(false);
      if (response.status === 200) {
        toast.success("password changed successfully");
      } else {
        toast.warn("password is not changed");
      }
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="m-5 pt-4 sm:mx-auto">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div>
              <label
                htmlFor="old-pass"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current password
              </label>
              <input
                type="password"
                id="old-pass"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-auto${
                  errors.currentPassword?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                {...register("currentPassword", {
                  required: "Enter current password",
                })}
              />
            </div>
            <span className="text-red-500">
              {errors.currentPassword?.message}
            </span>
          </div>
          <div>
            <div>
              <label
                htmlFor="new-pass"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New password
              </label>
              <input
                type="password"
                id="new-pass"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-auto${
                  errors.newPassword?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                {...register("newPassword", {
                  required: "Enter new password",
                })}
              />
            </div>
            <span className="text-red-500">{errors.newPassword?.message}</span>
          </div>
          <div>
            <div>
              <label
                htmlFor="confirm-pass"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm-pass"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-auto${
                  errors.confirmPassword?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                {...register("confirmPassword", {
                  required: "confirm password is required",
                  validate: (val) => {
                    if (watch("newPassword") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
            </div>
            <span className="text-red-500">
              {errors.confirmPassword?.message}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isLoading ? "loading..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EditPassword;
