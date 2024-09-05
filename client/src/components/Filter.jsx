import { Form } from "react-router-dom";
import FormInput from "./Form/FormInput";

function Filter() {
  return (
    <>
      <Form method="get">
        <FormInput label="Search Product" name="name" type="search" />
      </Form>
    </>
  );
}

export default Filter;
