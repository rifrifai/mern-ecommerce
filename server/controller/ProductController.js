import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

export const CreateProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);

  return res.status(200).json({
    message: "Create Product Success",
    data: newProduct,
  });
});

export const AllProduct = asyncHandler(async (req, res) => {
  res.send("All Product");
});

export const DetailProduct = asyncHandler(async (req, res) => {
  res.send("Detail Product");
});

export const UpdateProduct = asyncHandler(async (req, res) => {
  res.send("Update Product");
});

export const DeleteProduct = asyncHandler(async (req, res) => {
  res.send("Delete Product");
});

export const FileUpload = asyncHandler(async (req, res) => {
  res.send("File Upload");
});
