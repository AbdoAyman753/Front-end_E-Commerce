import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, updateUserState } from '../../store/slices/authSlice';
import { setCart } from '../../store/slices/cartSlice';
import { setWishlist } from '../../store/slices/wishlistSlice';
import './signInForm.css'; // Custome CSS Style

import signInSchema from './../../models/SignInSchema';
import URL from '../../utils/URL';

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
    try {
      const response = await axios.post(`${URL}/users/login`, data);
      if (response.status === 200) {
        dispatch(updateUserState(false));
        const { token, user } = response.data;
        const userInfo = { ...user, cart: undefined, wishlist: undefined };
        dispatch(setCart(user.cart[0].products));
        dispatch(setWishlist(user.wishlist[0].products));
        dispatch(login({ token, userInfo }));
      }
      reset();
    } catch (error) {
      if (error.response?.status === 400) {
        setError('error', {
          type: 'manual',
          message: 'Invalid Email Or Password',
        });
      } else if (error.response) {
        const { data } = error.response;

        if (data.message) {
          setError('error', {
            type: 'manual',
            message: data.message,
          });
        }
      } else {
        // Handle other errors here
        setError('error', {
          type: 'manual',
          message: 'An error occurred while submitting the form',
        });
      }
    }
  };

  return (
    <>
      {/*bg here for theme */}
      <div className='signin'>
        <div className='signin-container max639:flex max639:justify-center	'>
          <div className='form-content sm:w-2/5 w-4/5 sm:left-[15%] xl:py-5 lg:py-4 md:py-3- md:px-5 sm:px-4 px-3 sm:py-2 py-1 '>
            <div>
              <h1 className='form-title font-semibold sm:mb-5 mb-1 lg:text-3xl md:text-2xl sm:text-xl text-lg max639:mt-[10px] max639:mb-[8px]'>
                Welcome Back
              </h1>
            </div>
            {/* form */}
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className='divide-y divide-gray-200'
            >
              <div className='form-fields text-base leading-6 space-y-5  sm:text-lg sm:leading-7 sm:gap-4 gap-2'>
                {/* email input */}
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='email'
                    {...register('email', { required: true })}
                    type='text'
                    className='form-input peer placeholder-transparent md:h-10 sm:h-8 h-6 md:text-xl sm:text-base  w-full focus:outline-none bg-transparent text-white placeholder-gray-300 backdrop-blur-md border border-gray-300 rounded-md shadow-md sm:text-base text-sm'
                    placeholder='Email address'
                  />
                  <label
                    htmlFor='email'
                    className='lable email-lable absolute left-0 md:-top-8 sm:-top-7 -top-6 lg:text-base  sm:text-sm text-[10px]'
                  >
                    Email Address
                  </label>
                  <p className='text-red-500 mx-auto lg:text-base  sm:text-sm text-[10px]'>
                    {errors.email?.message}
                  </p>
                </div>
                {/* password input */}
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='password'
                    {...register('password', { required: true })}
                    type='password'
                    className='form-input peer placeholder-transparent md:h-10 sm:h-8 h-6 w-full focus:outline-none bg-transparent text-white placeholder-gray-300 backdrop-blur-md border border-gray-300 rounded-md shadow-md md:text-base  sm:text-sm text-[10px]'
                    placeholder='Password'
                  />
                  <label
                    htmlFor='password'
                    className='lable pass-lable absolute left-0 md:-top-8 sm:-top-7 -top-6 lg:text-base  sm:text-sm text-[10px]'
                  >
                    Password
                  </label>
                  <p className='text-red-500 mx-auto lg:text-base  sm:text-sm text-[10px]'>
                    {errors.password?.message}
                  </p>
                  <p className='text-red-500 mx-auto lg:text-base  sm:text-sm text-[10px]'>
                    {errors.error?.message}
                  </p>
                </div>
                {/* submit input */}
                <div className='relative form-login-btn'>
                  <button className='bg-btn-primary hover:bg-btn-Secondary rounded-lg max639:px-2 max639:py-0.75 sm:px-3 sm:py-2 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white transition-all '>
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='img-container'>
            <img
              className='bg-image'
              src='src/assets/img/formBG.jpg'
              alt='The Man From Watch Dogs Catch His Phone'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
