import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

export const CreateOrder = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, cartItem } = req.body;

  if (!cartItem || cartItem.length > 0) {
    res.status(400);
    throw new Error("Cart is empty");
  }

  let orderItem = [];
  let totalHarga = 0;

  for (const cart of cartItem) {
    const productData = await Product.findOne({ _id: cart.product });
    if (!productData) {
      res.status(404);
      throw new Error("ID Product Not Found");
    }
    orderItem = [...orderItem, productData];
  }

  res.status(201).json({
    orderItem,
    message: "Create Order Success",
  });
});

export const AllOrder = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get All Order Success",
  });
});

export const DetailOrder = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Detail Order Success",
  });
});

export const CurrentUserOrder = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Current User Order Success",
  });
});
