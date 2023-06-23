import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "../models/SignInSchema";
import { useNavigate } from "react-router";
const SignInForm = () => {
  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  //usenavigate
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    console.log({ data });
    navigate("/");
    reset();
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login To Your Account</h1>
            </div>

            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="divide-y divide-gray-200"
            >
              <div className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
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
                </div>
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
  );
};

export default SignInForm;
