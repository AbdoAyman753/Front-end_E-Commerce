import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuthenticate from "../../utils/useAuthenticate";
import Button from "../ui/Button";

const EditPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { token, userId } = useAuthenticate();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.patch(
        `http://localhost:8000/users/${userId}/changePassword`,
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
        reset();
      } else {
        toast.warn("password is not changed");
      }
    } catch (error) {
      setIsLoading(false);
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
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Current password
              </label>
              <input
                type="password"
                id="old-pass"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-auto${
                  errors.currentPassword?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-secondary-color focus:border-secondary-color"
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
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                New password
              </label>
              <input
                type="password"
                id="new-pass"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-auto${
                  errors.newPassword?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-secondary-color focus:border-secondary-color"
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
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm-pass"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full sm:w-auto${
                  errors.confirmPassword?.message
                    ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                    : "focus:ring-secondary-color focus:border-secondary-color"
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

        <Button
          type="submit"
        >
          {isLoading ? "loading..." : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default EditPassword;
