const express = require("express");
const router = express.Router();

const {
  addFinance,
  getDetailsByType,
} = require("../controllers/finance.controller");

router.post("/add-finance", async (req, res) => {
  const financeDetails = req.body;
  try {
    const newFinance = await addFinance(financeDetails);
    if (newFinance) {
      res.status(201).json({
        message: `Successfully added ${newFinance.finance_typetype}`,
        data: newFinance,
      });
    } else {
      res.status(400).json({ message: `Failed to add ${financeDetails.type}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/:type", async (req, res) => {
  const financeType = req.params.type;
  try {
    if (
      financeType === "income" ||
      financeType === "expense" ||
      financeType === "savings"
    ) {
      const financeDetails = await getDetailsByType(financeType);
      if (financeDetails) {
        res
          .status(200)
          .json({ message: `${financeType} details`, data: financeDetails });
      } else {
        res.status(404).json({ message: `${financeType} details not founnd` });
      }
    } else {
      throw "Invalid Url";
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

module.exports = router;
