import { useParams } from "react-router-dom";
import customApi from "../api";
import { useEffect, useState } from "react";

export default function DetailProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState("");

  const productData = async () => {
    const { data } = await customApi.get(`/product/${id}`);
    setProduct(data.data);
  };

  const formatPrice = (price) => {
    const rupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
    return rupiah;
  };

  useEffect(() => {
    productData();
  });

  return (
    <section>
      <div className="card card-side bg-neutral-300 shadow-xl">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <span className="text-3xl font-bold text-accent-content">
            {formatPrice(product.price)}
          </span>
          <p className="mt-3">{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
}
