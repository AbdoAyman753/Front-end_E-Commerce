/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/slices/cartSlice";
import { setWishlist } from "../store/slices/wishlistSlice";
import { login } from "../store/slices/authSlice";

// let firstRender = true;

const AppLayout = () => {
  // const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const token = localStorage.getItem("token");

  const userId = localStorage.getItem("userId");
  // console.log(wishlist);
  useEffect(() => {
    // if user => get user with its cart and wishlsit
    // let userCart;
    const getUser = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/users/${userId}`,
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      if (response.status === 200) {
        const user = response.data;
        const userInfo = { ...user, cart: undefined, wishlist: undefined };
        // const userInfo = { ...user };
        dispatch(setCart(user.cart[0].products));
        dispatch(setWishlist(user.wishlist[0].products));
        dispatch(login({ token, userInfo }));
      }
    };
    if (token && userId) {
      getUser();
    }
    //  if user save user cart and wishlist
    // return () => {
    //   const cart = JSON.parse(localStorage.getItem("cart"));
    //   const wishlist = JSON.parse(localStorage.getItem("wishlist"));

    //   const cartIds = cart
    //     ? cart.map((product) => {
    //         return product._id;
    //       })
    //     : [];

    //   const wishlistIds = wishlist
    //     ? wishlist.map((product) => {
    //         return product._id;
    //       })
    //     : [];

    //   const sendCartToServer = async () => {
    //     const cartResponse = await axios.patch(
    //       "http://localhost:8000/carts/updateCart",
    //       { products: cartIds },
    //       {
    //         headers: {
    //           Authorization: token,
    //         },
    //       }
    //     );
    //     console.log(cartResponse);
    //     const wishlistResponse = await axios.patch(
    //       "http://localhost:8000/wishlists/",
    //       { products: wishlistIds },
    //       {
    //         headers: {
    //           Authorization: token,
    //         },
    //       }
    //     );
    //     // console.log(response);
    //   };
    //   if (token) {
    //     sendCartToServer();
    //   }
    // };
  }, [dispatch, token, userId]);

  useEffect(() => {
    // if (firstRender)
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
      console.log(cartResponse);
    };
    // console.log(firstRender);
    if (token) {
      sendCartToServer();
    }
    // firstRender = false;
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
      console.log(wishlistResponse);
    };
    // console.log(firstRender);
    if (token) {
      sendWishlistToServer();
    }
    // firstRender = false;
  }, [wishlist]);
  return (
    <div>
      <Header />
      <main className="min-h-[80vh] flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
