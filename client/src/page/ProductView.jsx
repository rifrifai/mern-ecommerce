import { useLoaderData } from "react-router-dom";
import customApi from "../api";
import Filter from "../components/Filter";

export const loader = async ({ request }) => {
  const { data } = await customApi.get("/product");

  console.info(request);
  const products = data.data;
  return { products };
};
const ProductView = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <>
      <Filter />
    </>
  );
};

export default ProductView;
