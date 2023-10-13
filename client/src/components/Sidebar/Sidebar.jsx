import { AiOutlineStock } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { MdOutlineDashboardCustomize, MdOutlineSavings } from "react-icons/md";
import { RiBankCardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <header className="sidebar__header">
          My Finance{" "}
          <span className="sidebar__logo">
            <AiOutlineStock className="fill_icon" />
          </span>
        </header>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <span className="sidebar__icon">
              <MdOutlineDashboardCustomize className="fill_icon-accent" />
            </span>
            <Link to="/" className="sidebar__link">
              {" "}
              Dashboard
            </Link>
          </li>
          <li className="sidebar__item">
            <span className="sidebar__icon">
              <GiWallet className="fill_icon-accent" />
            </span>
            <Link to="/income" className="sidebar__link">
              {" "}
              Income
            </Link>
          </li>
          <li className="sidebar__item">
            <span className="sidebar__icon">
              <RiBankCardLine className="fill_icon-accent" />
            </span>
            <Link to="/expense" className="sidebar__link">
              Expense
            </Link>
          </li>
          <li className="sidebar__item">
            <span className="sidebar__icon">
              <MdOutlineSavings className="fill_icon-accent" />
            </span>
            <Link to="/savings" className="sidebar__link">
              {" "}
              Savings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
