import express from "express";
import {
  protectedMiddleware,
  adminMiddleware,
} from "../middleware/authMiddleware.js";
import {
  CreateProduct,
  AllProduct,
  DetailProduct,
  UpdateProduct,
  DeleteProduct,
  FileUpload,
} from "../controller/ProductController.js";

const router = express.Router();
// CRUD product

// Create data product
// post /api/v1/product
// middleware owner
router.post("/", protectedMiddleware, adminMiddleware, CreateProduct);

// Read data product
// get /api/v1/product
router.get("/", AllProduct);

// get /api/v1/product/:id
router.get("/:id", DetailProduct);

// Update data product
// put /api/v1/product/:id
// middleware owner
router.put("/:id", protectedMiddleware, adminMiddleware, UpdateProduct);

// Delete data product
// delete /api/v1/product/:id
// middleware owner
router.delete("/:id", protectedMiddleware, adminMiddleware, DeleteProduct);

// File Upload
// post /api/v1/product/file-upload
// middleware owner
router.post("/file-upload", FileUpload);
export default router;
