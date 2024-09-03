/* eslint-disable react/prop-types */
export default function CartProduct({ i }) {
  // format harga rupiah
  const priceFormat = (price) => {
    const rupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
    return rupiah;
  };

  return (
    <>
      <div
        className="card bg-neutral text-neutral-content shadow-xl"
        key={i._id}
      >
        <figure>
          <img src={i.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{i.name}</h2>
          <p className="font-bold text-primary">{priceFormat(i.price)}</p>
          <p>{i.description.substring(0, 50)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
