import { useParams } from "react-router-dom";
import customApi from "../api";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function DetailProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState("");

  const formatPrice = (price) => {
    const rupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
    return rupiah;
  };

  const productData = async () => {
    const { data } = await customApi.get(`/product/${id}`);
    setProduct(data.data);
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <section>
      <div className="card lg:card-side bg-base-300 shadow-xl">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="w-[400px] h-[500px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <span className="text-3xl font-bold text-accent-content">
            {formatPrice(product.price)}
          </span>
          <span className="badge badge-primary">{product.category}</span>
          <span className="mt-3 font-bold">Stok: {product.stock}</span>
          <p className="mt-3">{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">
              <FaPlus /> Keranjang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
