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
import { login } from "../../store/slices/authSlice";

const AppLayout = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // if user => get user with its cart and wishlsit
    const getUser = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/users/${userId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(response);
      setIsLoading(false);
      if (response.status === 200) {
        const user = response.data;
        const userInfo = { ...user, cart: undefined, wishlist: undefined };
        dispatch(setCart(user.cart[0].products));
        dispatch(setWishlist(user.wishlist[0].products));
        dispatch(login({ token, userInfo }));
      }
    };
    if (token && userId) {
      try {
        getUser();
      } catch (error) {
        // console.log(error.message);
      }
    }
  }, [dispatch]);

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
    if (token) {
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
    if (token) {
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
      <main className="min-h-[80vh] flex flex-col">
        {isLoading && <Loader />}
        {!isLoading && <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
