// mongoose => schema
import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  total: {
    type: Number,
    required: [true, "Please add a total price"],
  },
  status: {
    type: String,
    enum: ["pending", "failed", "success"],
    default: "pending",
  },
  firstName: {
    type: String,
    required: [true, "Please add a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a last name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone number"],
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
