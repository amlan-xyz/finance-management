const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    income_type: {
      type: String,
      required: true,
    },
    income_amount: {
      type: Number,
      required: true,
    },
    income_date: {
      type: String,
      required: true,
    },
    income_description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Income = mongoose.model("Income", incomeSchema);
module.exports = Income;
