import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const { id } = useParams();

  return (
    <>
      <h1>ID Product {id}</h1>
    </>
  );
}
