/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../ui/Loader";
import { setCart } from "../../store/slices/cartSlice";
import { setWishlist } from "../../store/slices/wishlistSlice";
import { login, updateUserState } from "../../store/slices/authSlice";
import useAuthenticate from "../../utils/useAuthenticate";

const AppLayout = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { userId, isLogged } = useAuthenticate();

  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    // if user => get user with its cart and wishlsit
    const getUser = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/users/user-info`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsLoading(false);
      if (response.status === 200) {
        dispatch(updateUserState(false));
        const user = response.data;
        const userInfo = { ...user, cart: undefined, wishlist: undefined };
        dispatch(setCart(user.cart[0].products));
        dispatch(setWishlist(user.wishlist[0].products));
        dispatch(login({ token, userInfo }));
      }
    };
    if (token) {
      try {
        getUser();
      } catch (error) {
        // console.log(error.message);
      }
    }
  }, []);

  useEffect(() => {
    const cartIds = cart
      ? cart.map((product) => {
          return product._id;
        })
      : [];

    const sendCartToServer = async () => {
      const cartResponse = await axios.patch(
        "http://localhost:8000/carts/updateCart",
        { products: cartIds },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(cartResponse);
    };
    if (userId && token) {
      if (!isLogged) {
        return;
      }
      try {
        sendCartToServer();
      } catch (error) {
        // console.log(error);
      }
    }
  }, [cart]);

  useEffect(() => {
    const wishlistIds = wishlist
      ? wishlist.map((product) => {
          return product._id;
        })
      : [];

    const sendWishlistToServer = async () => {
      const wishlistResponse = await axios.patch(
        "http://localhost:8000/wishlists/",
        { products: wishlistIds },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(wishlistResponse);
    };
    if (userId && token) {
      if (!isLogged) {
        dispatch(updateUserState(true));
        return;
      }
      try {
        sendWishlistToServer();
      } catch (error) {
        // console.log(error);
      }
    }
  }, [wishlist]);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="min-h-[80vh] flex flex-col bg-back-color">
        {isLoading && <Loader />}
        {!isLoading && <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
