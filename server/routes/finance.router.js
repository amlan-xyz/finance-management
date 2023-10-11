const express = require("express");
const router = express.Router();

const {
  addIncome,
  getIncome,
  addExpense,
  getExpense,
  addSavings,
  getSavings,
} = require("../controllers/finance.controller");

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

router.post("/add-expense", async (req, res) => {
  const expenseDetails = req.body;
  try {
    const savedExpense = await addExpense(expenseDetails);
    if (savedExpense) {
      res.status(201).json({ message: "Expense added", data: savedExpense });
    } else {
      res.status(400).json({ message: "Expense adding failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/expense", async (req, res) => {
  try {
    const expenseList = await getExpense();
    if (expenseList) {
      res
        .status(200)
        .json({ message: "Fetching expense successful", data: expenseList });
    } else {
      res.status(404).json({ message: "Fetching expense failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.post("/add-savings", async (req, res) => {
  const savingsDetails = req.body;
  try {
    const savedSavings = await addSavings(savingsDetails);
    if (savedSavings) {
      res.status(201).json({ message: "Savings added", data: savedSavings });
    } else {
      res.status(400).json({ message: "Savings adding failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/savings", async (req, res) => {
  try {
    const savingsList = await getSavings();
    if (savingsList) {
      res
        .status(200)
        .json({ message: "Fetching savings successful", data: savingsList });
    } else {
      res.status(404).json({ message: "Fetching savings failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

module.exports = router;
