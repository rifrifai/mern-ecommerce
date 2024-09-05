import { useLoaderData } from "react-router-dom";
import customApi from "../api";
import Filter from "../components/Filter";
import CartProduct from "../components/CartProduct";

export const loader = async ({ request }) => {
  const { data } = await customApi.get("/product");

  console.info(request);
  const products = data.data;
  return { products };
};
const ProductView = () => {
  const { products } = useLoaderData();

  return (
    <>
      <Filter />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {products.map((i) => (
          <CartProduct key={i._id} i={i} />
        ))}
      </div>
    </>
  );
};

export default ProductView;
