// mongoose => schema
import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a product name"],
    unique: [true, "Product name already exists"],
  }, // String is shorthand for {type: String}
  price: {
    type: Number,
    required: [true, "Please add a price!"],
  },
  description: {
    type: String,
    required: [true, "Please add a description!"],
  },
  image: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    required: [true, "Please add a category product!"],
    enum: ["Shoes", "T-Shirt", "Shirt", "Trousers"],
  },
  stock: {
    type: String,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
