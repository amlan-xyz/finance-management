import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchExpense } from "../../actions/expense.action";
import { fetchIncome } from "../../actions/income.action";
import { fetchSavings } from "../../actions/savings.action";
import { ExpenseBreakdown } from "../../components/Charts/ExpenseBreakdown";
import { IncomeBreakdown } from "../../components/Charts/IncomeBreakdown";
import { IncomeVsExpenseChart } from "../../components/Charts/IncomeVsExpense";
import { SavingsBreakdown } from "../../components/Charts/SavingsBreakdown";
import { EntryForm } from "../../components/Form/EntryFrom";
import { Metrics } from "../../components/Metrics/Metrics";
import "./Dashboard.css";
export const Dashboard = () => {
  const dispatch = useDispatch();
  const [showChart, setShowChart] = useState("incomeVsExpense");

  const toggleChart = (value) => {
    if (value === "incomeVsExpense") {
      setShowChart("incomeVsExpense");
    } else if (value === "income") {
      setShowChart("income");
    } else if (value === "expense") {
      setShowChart("expense");
    } else {
      setShowChart("savings");
    }
  };

  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpense());
    dispatch(fetchSavings());
  }, [dispatch]);

  return (
    <>
      <header className="header">Dashboard</header>
      <Metrics />
      <EntryForm />
      <div className="charts">
        <div className="charts__toggle">
          <label htmlFor="chart">Report :</label>
          <select id="chart" onChange={(e) => toggleChart(e.target.value)}>
            <option value="incomeVsExpense">Income Vs Expense</option>
            <option value="income">Income Breakdown</option>
            <option value="expense">Expense Breakdown</option>
            <option value="savings">Savings Breakdown</option>
          </select>
        </div>
        {showChart === "incomeVsExpense" && <IncomeVsExpenseChart />}
        {showChart === "income" && <IncomeBreakdown />}
        {showChart === "expense" && <ExpenseBreakdown />}
        {showChart === "savings" && <SavingsBreakdown />}
      </div>
    </>
  );
};
