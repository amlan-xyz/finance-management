require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

//cors
let allowedDomains = [
  "https://finance-management-by-amlan.vercel.app",
  "http://localhost:3000",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedDomains.indexOf(origin) === -1) {
        var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

//routes
const financeRouter = require("./routes/finance.router");

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to My Finance Manager" });
});

app.use("", financeRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
});
