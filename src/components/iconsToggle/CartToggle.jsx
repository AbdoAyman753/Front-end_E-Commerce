import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CartToggle = ({ game, fill }) => {
  const [cart, setCart] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get("http://localhost:3000/cart?_delay=0");
      setCart(data);
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setIsInCart(storedCart.some((storedGame) => storedGame._id == game._id));
    };

    fetchCart();
  }, [game]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const handleToggle = () => {
    const newCart = [...cart];
    const index = newCart.findIndex((storedGame) => storedGame._id == game._id);

    if (index === -1) {
      // add to cart
      axios.post("http://localhost:3000/cart", game);
      newCart.push(game);
      setIsInCart(true);
    } else {
      // remove from cart
      axios.delete(`http://localhost:3000/cart/${game._id}`);
      newCart.splice(index, 1);
      setIsInCart(false);
    }

    setCart(newCart);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isInCart ? fill : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7 
         hover:stroke-sky-300 "
      onClick={handleToggle}
    >
      <title>Add To Cart</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default CartToggle;
