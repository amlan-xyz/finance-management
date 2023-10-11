const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    expense_type: {
      type: String,
      required: true,
    },
    expense_amount: {
      type: Number,
      required: true,
    },
    expense_date: {
      type: String,
      required: true,
    },
    expense_description: String,
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
