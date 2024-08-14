import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
const port = 3000;
import authRouter from "./routes/authRouter.js";

// parent router
app.use("/api/v1/auth", authRouter);

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
