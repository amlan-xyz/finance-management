const express = require("express");
const router = express.Router();

const { addIncome, getIncome } = require("../controllers/finance.controller");

router.post("/add-income", async (req, res) => {
  const incomeDetails = req.body;
  try {
    const savedIncome = await addIncome(incomeDetails);
    if (savedIncome) {
      res.status(201).json({ message: "Income added", data: savedIncome });
    } else {
      res.status(400).json({ message: "Income adding failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/income", async (req, res) => {
  try {
    const incomeList = await getIncome();
    if (incomeList) {
      res
        .status(200)
        .json({ message: "Fetching income successful", data: incomeList });
    } else {
      res.status(404).json({ message: "Fetching income failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

module.exports = router;
