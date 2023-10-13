import { GiWallet } from "react-icons/gi";
import { MdAttachMoney, MdOutlineSavings } from "react-icons/md";
import { RiBankCardLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import "./Metrics.css";

export const Metrics = () => {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);
  const savings = useSelector((state) => state.savings);

  const incomeValue = income.reduce((acc, curr) => acc + curr.amount, 0);
  const expenseValue = expense.reduce((acc, curr) => acc + curr.amount, 0);
  const savingsValue = savings.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = incomeValue - expenseValue - savingsValue;

  return (
    <div className="metrics">
      <ul className="metrics__body">
        <li className="metrics__item">
          <span className="metrics__icon">
            <MdAttachMoney className="fill_icon-accent" />
          </span>
          <p className="metrics__value">{balance}</p>
          <p className="metrics__tag">Balance</p>
        </li>
        <li className="metrics__item">
          <span className="metrics__icon">
            <GiWallet className="fill_icon-accent" />
          </span>
          <p className="metrics__value">{incomeValue}</p>
          <p className="metrics__tag">Income</p>
        </li>
        <li className="metrics__item">
          <span className="metrics__icon">
            <RiBankCardLine className="fill_icon-accent" />
          </span>
          <p className="metrics__value">{expenseValue}</p>
          <p className="metrics__tag">Expense</p>
        </li>
        <li className="metrics__item">
          <span className="metrics__icon">
            <MdOutlineSavings className="fill_icon-accent" />
          </span>
          <p className="metrics__value">{savingsValue}</p>
          <p className="metrics__tag">Savings</p>
        </li>
      </ul>
    </div>
  );
};
