import express from "express";
import { registerUser } from "../controller/authController.js";

const router = express.Router();
// child router

// post /api/v1/auth/register
router.post("/register", registerUser);

// post /api/v1/auth/login
router.post("/login", (req, res) => {
  res.send("login");
});

// get /api/v1/auth/logout
router.get("/logout", (req, res) => {
  res.send("logout");
});

// get /api/v1/auth/getUser
router.get("/getUser", (req, res) => {
  res.send("get current user");
});

export default router;
