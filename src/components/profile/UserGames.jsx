import React from "react";
import { useOutletContext } from "react-router";

const UserGames = () => {
  const { library } = useOutletContext();
  const products = library[0].products
  if (products.length < 1) return <h2>empty library</h2>;
  return (
    <div className="w-3/4 sm:w-full m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:ml-2 py-4">
      {products.map((product, i) => (
        <div key={product._id} className="border p-1 rounded">
          <div className="">
            <img
              className="w-full h-80"
              src={product.imgs_links[i]}
              alt="game"
            />
          </div>
          <div className="p-3">
            <h3>{product.product_name}</h3>
            <p className="ml-3">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserGames;
