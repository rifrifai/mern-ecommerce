import express from "express";
import { registerUser, loginUser } from "../controller/authController.js";
import { protectedMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
// child router

// post /api/v1/auth/register
router.post("/register", registerUser);

// post /api/v1/auth/login
router.post("/login", loginUser);

// get /api/v1/auth/logout
router.get("/logout", (req, res) => {
  res.send("logout");
});

// get /api/v1/auth/getUser
router.get("/getuser", protectedMiddleware, (req, res) => {
  res.send("get current user");
});

export default router;
