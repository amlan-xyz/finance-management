require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to My Finance Manager" });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
});
