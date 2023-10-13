import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "../../actions/expense.action";
import { fetchIncome } from "../../actions/income.action";
import { fetchSavings } from "../../actions/savings.action";
import { ExpenseBreakdown } from "../../components/Charts/ExpenseBreakdown";
import { IncomeBreakdown } from "../../components/Charts/IncomeBreakdown";
import { IncomeVsExpenseChart } from "../../components/Charts/IncomeVsExpense";
import { SavingsBreakdown } from "../../components/Charts/SavingsBreakdown";
import { Error } from "../../components/Error/Error";
import { EntryForm } from "../../components/Form/EntryFrom";
import { Loader } from "../../components/Loader/Loader";
import { Metrics } from "../../components/Metrics/Metrics";
import "./Dashboard.css";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
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
      {loading ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <Error error={error} />
          ) : (
            <>
              <header className="header">Dashboard</header>
              <Metrics />
              <EntryForm />
              <div className="charts">
                <div className="charts__toggle">
                  <label htmlFor="chart">Report :</label>
                  <select
                    id="chart"
                    onChange={(e) => toggleChart(e.target.value)}
                  >
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
          )}
        </>
      )}
    </>
  );
};
