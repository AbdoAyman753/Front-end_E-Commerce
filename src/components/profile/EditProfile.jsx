import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import Picture from "./Picture";
import useAuthenticate from "../../utils/useAuthenticate";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../store/slices/authSlice";
import { toast } from "react-toastify";
import Button from "../ui/Button";

const EditProfile = () => {
  const user = useOutletContext();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { token, userId } = useAuthenticate();

  const handleOnSubmit = async (data) => {
    setIsLoading(true);
    const response = await axios.patch(
      `http://localhost:8000/users/${userId}/`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setIsLoading(false);
    if (response.status === 200) {
      dispatch(updateUserName(data.username));
      toast.success("username changed successfully");
    } else {
      toast.warn("username is not changed");
    }
  };
  return (
    <div className="m-5 mb-12 pt-4 sm:mx-auto ">
      <Picture />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 text-white">
          <div>
            <div>
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
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
        </div>
        <Button type="submit">{isLoading ? "loading..." : "Save"}</Button>
      </form>
    </div>
  );
};

export default EditProfile;
