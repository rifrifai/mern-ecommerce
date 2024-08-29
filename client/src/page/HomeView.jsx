/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from "axios";
import customApi from "../api.js";
import { useState, useEffect } from "react";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await customApi.get("/product");
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
        <h2 className="text-2xl font-bold lowercase"> product list</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((i) => (
          <div
            className="card bg-neutral text-neutral-content shadow-xl"
            key={i._id}
          >
            <figure>
              <img src={i.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{i.name}</h2>
              <p className="font-bold text-primary">Rp. {i.price}</p>
              <p>{i.description.substring(0, 50)}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeView;
