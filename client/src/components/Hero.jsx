import { useLoaderData, Link } from "react-router-dom";

export default function Hero() {
  const { products } = useLoaderData();

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tighter sm:text-6xl ">
            Welcome to NurisTech
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Where you&apos;re looking for the best school in Central Java
            Indonesia, you&apos;ve come to the right place. NurisTech is a the
            best place to learn something new.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary capitalize">
            our product
          </Link>
        </div>

        <div className="hidden lg:carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
          {products.map((i) => (
            <div className="carousel-item" key={i._id}>
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box"
              />
            </div>
          ))}
          {/* <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
