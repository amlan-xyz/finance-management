const Finance = require("../models/finance.model");
const { getDate } = require("../utils/date");

const addFinance = async (financeDetails) => {
  const finance = {
    finance_type: financeDetails.type,
    category: financeDetails.category,
    amount: financeDetails.amount,
    description: financeDetails.description,
    date: getDate(),
  };
  try {
    const newFinance = new Finance(finance);
    await newFinance.save();
    return newFinance;
  } catch (error) {
    console.error(`Error adding ${finance.finance_type} details`, error);
  }
};

const getDetailsByType = async (type) => {
  try {
    const financeDetails = await Finance.find({ finance_type: type });
    return financeDetails;
  } catch (error) {
    console.error(`Error getting ${type} details`, error);
  }
};

module.exports = {
  addFinance,
  getDetailsByType,
};
