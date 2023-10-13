import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "../../actions/expense.action";
import { Loader } from "../../components/Loader/Loader";
export const Expense = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const expenseList = useSelector((state) => state.expense);

  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);
  return (
    <>
      <header className="header">Expense Details</header>
      {loading ? (
        <Loader />
      ) : (
        <table className="table">
          <thead>
            <tr className="table__header">
              <th className="table__header-item">Date</th>
              <th className="table__header-item">Category</th>
              <th className="table__header-item">Description</th>
              <th className="table__header-item">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenseList.map(({ _id, category, amount, date, description }) => (
              <tr className="table__item" key={_id}>
                <td>{date}</td>
                <td>{category}</td>
                <td>{!description ? "Description not given" : description}</td>
                <td>{amount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="table__item">
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{expenseList.reduce((acc, curr) => acc + curr.amount, 0)}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};
