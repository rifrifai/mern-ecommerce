import express from "express";
import {
  protectedMiddleware,
  ownerMiddleware,
} from "../middleware/authMiddleware.js";
import {
  CreateOrder,
  AllOrder,
  DetailOrder,
  CurrentUserOrder,
} from "../controller/OrderController.js";

const router = express.Router();

// post /api/v1/order
// user auth only
router.post("/", protectedMiddleware, CreateOrder);

// get /api/v1/order
// owner auth only
router.get("/", protectedMiddleware, ownerMiddleware, AllOrder);

// get /api/v1/order/:id
// owner auth only
router.get("/:id", protectedMiddleware, ownerMiddleware, DetailOrder);

// get /api/v1/order/current/user
// user auth only
router.get("/current/user", protectedMiddleware, CurrentUserOrder);

export default router;
