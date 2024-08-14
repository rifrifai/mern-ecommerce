import express from "express";
import User from "../models/userModel.js";

const router = express.Router();
// child router

// post /api/v1/auth/register
router.post("/register", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

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
