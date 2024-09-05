import { Form, Link } from "react-router-dom";
import FormInput from "./Form/FormInput";
import FormSelect from "./Form/FormSelect";
import { useLoaderData } from "react-router-dom";

function Filter() {
  // reload search product without lost
  const { params } = useLoaderData();
  const { name, category } = params;
  const categories = ["Shoes", "T-Shirt", "Shirt", "Trousers"];

  return (
    <>
      <Form
        method="get"
        className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-3 grid-cols-2 items-center"
      >
        <FormInput
          label="Search Product"
          name="name"
          type="search"
          defaultValue={name}
        />
        <FormSelect
          label="Select Category"
          name="category"
          list={categories}
          defaultValue={category}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        <Link to="/products" className="btn btn-accent">
          Reset!
        </Link>
      </Form>
    </>
  );
}

export default Filter;
