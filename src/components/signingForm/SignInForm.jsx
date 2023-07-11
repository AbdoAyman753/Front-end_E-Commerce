import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, updateUserState } from "../../store/slices/authSlice";
import { setCart } from "../../store/slices/cartSlice";
import { setWishlist } from "../../store/slices/wishlistSlice";

import signInSchema from "./../../models/SignInSchema";

const SignInForm = () => {
  const dispatch = useDispatch();
  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  //usenavigate
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    console.log({ data });

    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        data
      );
      if (response.status === 200) {
        dispatch(updateUserState(false));
        const { token, user } = response.data;
        const userInfo = { ...user, cart: undefined, wishlist: undefined };
        // console.log(user.cart.products);
        dispatch(setCart(user.cart[0].products));
        dispatch(setWishlist(user.wishlist[0].products));
        dispatch(login({ token, userInfo }));
      }
      console.log(response);
      reset();
    } catch (error) {
      if (error.response?.status === 400) {
        setError("error", {
          type: "manual",
          message: "Invalid Email Or Password",
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

  return (
    <>
      {/*// bg here for theme */}
      <div className="min-h-screen  bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto md:w-[40vw]">
          {/* // bg here for shadow */}
          <div className="absolute sm:w-[60vw] inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          {/* // bg here for form */}
          <div className="relative sm:w-[60vw]  px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Login To Your Account
                </h1>
              </div>
              {/* form */}
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="divide-y divide-gray-200"
              >
                <div className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                  {/* email input */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      {...register("email", { required: true })}
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    <p className="text-red-500 mx-auto">
                      {errors.email?.message}
                    </p>
                  </div>
                  {/* password input */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      {...register("password", { required: true })}
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    <p className="text-red-500 mx-auto ">
                      {errors.password?.message}
                    </p>
                    <p className="text-red-500 mx-auto ">
                      {errors.error?.message}
                    </p>
                  </div>
                  {/* submit input */}
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;