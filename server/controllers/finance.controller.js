const Income = require("../models/income.model");

const { getDate } = require("../utils/date");

const addIncome = async (incomeDetails) => {
  const income = {
    income_type: incomeDetails.incomeType,
    income_amount: incomeDetails.incomeAmount,
    income_description: incomeDetails.incomeDescription,
    income_date: getDate(),
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
