import asyncHandler from "../middleware/asyncHandler.js";

export const CreateOrder = asyncHandler(async (req, res) => {
  res.status(201).json({
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
