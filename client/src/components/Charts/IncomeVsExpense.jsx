import CanvasJSReact from "@canvasjs/react-charts";
import React from "react";

import { useSelector } from "react-redux";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export const IncomeVsExpenseChart = () => {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  const incomeValue = income.reduce((acc, curr) => acc + curr.amount, 0);
  const expenseValue = expense.reduce((acc, curr) => acc + curr.amount, 0);
  const options = {
    title: {
      text: "Income Vs Expense",
      fontColor: "#2483db",
      fontFamily: "poppins",
    },
    axisY: {
      minimum: 0,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Income", y: incomeValue },
          { label: "Expense", y: expenseValue },
        ],
      },
    ],
    backgroundColor: "#fcfced",
  };
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};
