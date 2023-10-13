import CanvasJSReact from "@canvasjs/react-charts";
import React from "react";

import { useSelector } from "react-redux";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export const IncomeBreakdown = () => {
  const income = useSelector((state) => state.income);

  const labels = [];
  const inputs = income.reduce((acc, curr) => {
    if (!labels.includes(curr.category)) {
      labels.push(curr.category);
      acc.push({ label: curr.category, y: curr.amount });
    } else {
      const item = acc.find((item) => item.label === curr.category);
      item.y = item.y + curr.amount;
    }
    return acc;
  }, []);

  const options = {
    title: {
      text: "Income Breakdown",
      fontColor: "#2483db",
      fontFamily: "poppins",
    },
    data: [
      {
        type: "column",
        dataPoints: inputs,
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
