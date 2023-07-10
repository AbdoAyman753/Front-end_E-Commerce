import React from "react";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import signUpSchema from "./../../models/SignUpSchema";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  //usenavigate
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    console.log({ data });

    try {
      const response = await axios.post("http://localhost:8000/users/", data);

      if (response.status === 201) {
        navigate("/sign-in");
        reset();
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setError("email", {
          type: "manual",
          message: "Email is already registered",
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

      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          {/* // bg here for shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          {/* // bg here for form */}
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Register To New Account
                </h1>
              </div>
              {/* form */}
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="divide-y divide-gray-200"
              >
                <div className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                  {/* userName input */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="userName"
                      {...register("user_name", { required: true })}
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="User Name "
                    />
                    <label
                      htmlFor="userName"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      User Name
                    </label>
                    <p className="text-red-500 mx-auto">
                      {errors.user_name?.message}
                    </p>
                  </div>

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
                    <p className="text-red-500 w-[50] md:w-[35vw] ">
                      {errors.password?.message}
                    </p>
                  </div>

                  {/* confirm password input */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="confirmPassword"
                      {...register("confirmPassword", { required: true })}
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Confirm Password"
                    />
                    <label
                      htmlFor="confirmPassword"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Confirm Password
                    </label>
                    <p className="text-red-500 mx-auto ">
                      {errors.confirmPassword?.message}
                    </p>
                  </div>
                  {/* submit input */}
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                  </div>
                </div>
                <p className="text-red-500 mx-auto ">{errors.error?.message}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
