const Expense = require("../models/expense.model");
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

const addExpense = async (expenseDetails) => {
  const expense = {
    expense_type: expenseDetails.expenseType,
    expense_amount: expenseDetails.expenseAmount,
    expense_description: expenseDetails.expenseDescription,
    expense_date: getDate(),
  };
  try {
    const newExpense = new Expense(expense);
    await newExpense.save();
    return newExpense;
  } catch (error) {
    console.error("Error adding expense", error);
  }
};
const getExpense = async () => {
  try {
    const expenseList = await Expense.find();
    return expenseList;
  } catch (error) {
    console.error("Error getting expense list", error);
  }
};

module.exports = { addIncome, getIncome, addExpense, getExpense };
