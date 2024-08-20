import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// show image in browser
app.use(express.static("./public"));

import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";

// parent router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);

app.use(notFound);
app.use(errorHandler);

// server
app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});

// conn
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.info("Database connected");
  })
  .catch((err) => {});
