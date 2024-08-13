import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Holy Molly");
});

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
