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
  // Req Query
  const queryObj = { ...req.query };

  // fungsi untuk mengabaikan jika ada req page dan limit
  const excludeField = ["page", "limit"];
  excludeField.forEach((i) => delete queryObj[i]);

  // filter product
  let query = Product.find(queryObj);

  // pagination
  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 30;
  const skipData = (page - 1) * limitData;

  query = query.skip(skipData).limit(limitData);

  if (req.query.page) {
    const numProduct = await Product.countDocuments();

    if (skipData >= numProduct) {
      res.status(404);
      throw new Error("This page doesn't exist");
    }
  }

  const data = await query;

  // const allProduct = await Product.find();

  return res.status(200).json({
    message: "Get All Product Success",
    data,
    // data: allProduct,
  });
});

export const DetailProduct = asyncHandler(async (req, res) => {
  const detailProduct = await Product.findById(req.params.id);

  if (!detailProduct) {
    res.status(404);
    throw new Error("Product Not Found");
  }

  return res.status(200).json({
    message: "Get Detail Product Success",
    data: detailProduct,
  });
});

export const UpdateProduct = asyncHandler(async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { runValidators: false, new: true }
  );

  if (!updateProduct) {
    res.status(404);
    throw new Error("Product Not Found");
  }

  return res.status(201).json({
    message: "Update Product Success",
    data: updateProduct,
  });
});

export const DeleteProduct = asyncHandler(async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deleteProduct) {
    res.status(404);
    throw new Error("Product Not Found");
  }

  return res.status(200).json({
    message: "Delete Product Success",
  });
});

export const FileUpload = asyncHandler(async (req, res) => {
  const file = req.file;

  if (!file) {
    res.status(400);
    throw new Error("No file uploaded");
  }

  const imageName = file.filename;
  const pathImage = `/uploads/${imageName}`;

  res.status(200).json({
    message: "Image Upload Success",
    image: pathImage,
  });
});
