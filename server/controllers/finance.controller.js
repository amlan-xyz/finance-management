const Income = require("../models/income.model");

const addIncome = async (incomeDetails) => {
  const { category, amount, date, description } = incomeDetails;
  const income = {
    category,
    amount,
    date,
    description,
  };
  try {
    const newIncome = new Income(income);
    await newIncome.save();
    return newIncome;
  } catch (error) {
    console.error("Error adding income", error);
  }
};

const getIncome = async () => {
  try {
    const incomeList = await Income.find();
    return incomeList;
  } catch (error) {
    console.error("Error getting income list", error);
  }
};

module.exports = { addIncome, getIncome };
