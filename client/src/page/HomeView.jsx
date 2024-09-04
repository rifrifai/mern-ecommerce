/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import customApi from "../api.js";
import CartProduct from "../components/CartProduct.jsx";
import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero.jsx";

export const loader = async ({ request }) => {
  const { data } = await customApi.get("/product?limit=4");

  const products = data.data;
  return { products };
};

const HomeView = () => {
  const { products } = useLoaderData();

  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="border-b border-primary pb-2 mt-5">
        <h2 className="text-2xl font-bold capitalize"> product list</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {products.map((i) => (
          <CartProduct i={i} key={i._id} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
