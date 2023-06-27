/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/slices/cartSlice";

const AppLayout = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const token = localStorage.getItem("token");

  useEffect(() => {
    // if user => get user with its cart and wishlsit
    let userCart;
    const getCart = async () => {
      const cart = await axios.get("http://localhost:3000/cart");
      userCart = cart.data;
      dispatch(setCart(userCart));
    };
    if (token) {
      getCart();
    }
    //  if user save user cart and wishlist
    // return () => {
    //   const sendCartToServer = async () => {
    //     axios.post("http://localhost:3000/cart", cart);
    //   };
    //   if (token) {
    //     sendCartToServer();
    //   }
    // };
  }, [dispatch, token]);
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
