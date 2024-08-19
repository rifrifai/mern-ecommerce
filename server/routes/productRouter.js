import express from "express";
import { protectedMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
// CRUD product

// Create data product
// post /api/v1/product
// middleware owner, user (harus login)
router.post("/");

// Read data product
// get /api/v1/product
// middleware owner, user (harus login)

// Update data product
// put /api/v1/product

// Delete data product
// delete /api/v1/product
export default router;
