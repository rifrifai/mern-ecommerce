import axios from "axios";

try {
  const data = await axios.get("api/v1/product");
  console.info(data);
} catch (error) {
  console.info(error);
}

const HomeView = () => {
  return <div>HomeView</div>;
};

export default HomeView;
