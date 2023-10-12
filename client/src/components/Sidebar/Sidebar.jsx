import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__container">
        <li className="sidebar__item">
          <Link to="/" className="sidebar__link">
            Dasboard
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/income" className="sidebar__link">
            Income
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/expense" className="sidebar__link">
            Expense
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/savings" className="sidebar__link">
            Savings
          </Link>
        </li>
      </ul>
    </div>
  );
};
