import React from "react";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import axios from "axios";
import signUpSchema from "./../../models/SignUpSchema";
import URL from "../../utils/URL";
import "./signUpForm.css"; // Custome CSS Style

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
    try {
      const response = await axios.post(`${URL}/users/`, data);

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
          message: "error occurred while submitting the form",
        });
      }
    }
  };
  return (
    <>
      {/*// bg here for theme */}

      <div className="signup">
        <div className="signup-container flex justify-center	">
          <div className="form-content xl:w-5/12 sm:w-2/5 w-4/5 sm:left-[15%] xl:py-5 lg:py-4 md:py-3- md:px-5 sm:px-4 px-3 sm:py-2 py-1 ">
            <div>
              <h1 className="form-title font-semibold sm:mb-5 mb-1 lg:text-3xl md:text-2xl sm:text-xl text-lg mt-[10px] mb-[8px]">
                Join Now
              </h1>
            </div>
            {/* form */}
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="divide-y divide-gray-200"
            >
              <div className="form-fields text-base leading-6 space-y-5  sm:text-lg sm:leading-7 sm:gap-4 gap-2">
                {/* userName input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="userName"
                    {...register("user_name", { required: true })}
                    type="text"
                    className="form-input peer placeholder-transparent md:h-10 sm:h-8 h-6 md:text-xl sm:text-base  w-full focus:outline-none bg-transparent text-white placeholder-gray-300 backdrop-blur-md border border-gray-300 rounded-md shadow-md sm:text-base text-sm"
                    placeholder="User Name "
                  />
                  <label
                    htmlFor="userName"
                    className="lable email-lable absolute left-0 md:-top-8 sm:-top-7 -top-6 lg:text-base  sm:text-sm text-[10px]"
                  >
                    User Name
                  </label>
                  <p className="text-red-500 mx-auto lg:text-base sm:text-sm text-[10px]">
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
                    className="form-input peer placeholder-transparent md:h-10 sm:h-8 h-6 md:text-xl sm:text-base  w-full focus:outline-none bg-transparent text-white placeholder-gray-300 backdrop-blur-md border border-gray-300 rounded-md shadow-md sm:text-base text-sm"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="lable email-lable absolute left-0 md:-top-8 sm:-top-7 -top-6 lg:text-base  sm:text-sm text-[10px]"
                  >
                    Email Address
                  </label>
                  <p className="text-red-500 mx-auto lg:text-base sm:text-sm text-[10px]">
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
                    className="form-input peer placeholder-transparent md:h-10 sm:h-8 h-6 w-full focus:outline-none bg-transparent text-white placeholder-gray-300 backdrop-blur-md border border-gray-300 rounded-md shadow-md md:text-base  sm:text-sm text-[10px]"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="lable pass-lable absolute left-0 md:-top-8 sm:-top-7 -top-6 lg:text-base  sm:text-sm text-[10px]"
                  >
                    Password
                  </label>
                  <p className="text-red-500 lg:text-base sm:text-sm text-[10px] w-[50] md:w-[35vw] ">
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
                    className="form-input peer placeholder-transparent md:h-10 sm:h-8 h-6 w-full focus:outline-none bg-transparent text-white placeholder-gray-300 backdrop-blur-md border border-gray-300 rounded-md shadow-md md:text-base  sm:text-sm text-[10px]"
                    placeholder="Confirm Password"
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="lable pass-lable absolute left-0 md:-top-8 sm:-top-7 -top-6 lg:text-base  sm:text-sm text-[10px]"
                  >
                    Confirm Password
                  </label>
                  <p className="text-red-500 mx-auto lg:text-base  sm:text-sm text-[10px]  ">
                    {errors.confirmPassword?.message}
                  </p>
                </div>
                {/* submit input */}
                <div className="relative form-login-btn">
                  <button className="bg-btn-primary hover:bg-btn-Secondary rounded-lg md:px-3 md:py-1.25 sm:px-2.5 sm:py-1 px-2 py-0.75 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white transition-all">
                    Register
                  </button>
                </div>
              </div>
              <p className="text-red-500 mx-auto lg:text-base border-none sm:text-sm text-[10px] ">
                {errors.error?.message}
              </p>
            </form>
          </div>

          <div className="img-container">
            <img
              className="bg-image"
              src="src/assets/img/signUp.webp"
              alt="Gang Men and Women Aiming their guns At You Challenging You to Fight"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
