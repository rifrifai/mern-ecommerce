/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from "axios";
import customApi from "../api.js";
import { useState, useEffect } from "react";
import CartProduct from "../components/CartProduct.jsx";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await customApi.get("/product?limit=4");
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="border-b border-primary pb-2">
        <h2 className="text-2xl font-bold capitalize"> product list</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {products.map((i) => (
          <CartProduct i={i} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
