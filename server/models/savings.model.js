const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema(
  {
    savings_type: {
      type: String,
      required: true,
    },
    savings_amount: {
      type: Number,
      required: true,
    },
    savings_date: {
      type: String,
      required: true,
    },
    savings_description: String,
  },
  { timestamps: true }
);

const Savings = mongoose.model("Savings", savingsSchema);
module.exports = Savings;
