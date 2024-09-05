import { useLoaderData } from "react-router-dom";
import customApi from "../api";
import Filter from "../components/Filter";
import CartProduct from "../components/CartProduct";

export const loader = async ({ request }) => {
  // filter search product
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const { data } = await customApi.get("/product", { params });

  console.info(params);
  const products = data.data;
  console.info(products);

  // default value params
  return { products, params };
};
const ProductView = () => {
  const { products } = useLoaderData();

  return (
    <>
      <Filter />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {!products.length ? (
          <h1 className="text-3xl font-bold mt-5">There is no product</h1>
        ) : (
          products.map((i) => <CartProduct key={i._id} i={i} />)
        )}
      </div>
    </>
  );
};

export default ProductView;
