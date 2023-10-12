const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema(
  {
    finance_type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: String,
    date: String,
  },
  { timestamps: true }
);

const Finance = mongoose.model("Finance", financeSchema);
module.exports = Finance;
