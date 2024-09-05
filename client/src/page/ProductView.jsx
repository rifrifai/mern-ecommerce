import { useLoaderData } from "react-router-dom";
import customApi from "../api";

export const loader = async ({ request }) => {
  const { data } = await customApi.get("/product");

  console.info(request);
  const products = data.data;
  return { products };
};
const ProductView = () => {
  const { products } = useLoaderData();
  console.log(products);

  return <div>ProductView</div>;
};

export default ProductView;
