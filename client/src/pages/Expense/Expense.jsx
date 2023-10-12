import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "../../actions/expense.action";
export const Expense = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const expenseList = useSelector((state) => state.expense);

  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);
  return (
    <section className="expense">
      <header className="section__header">Expense Details</header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {expenseList.map((item) => {
            const { _id, amount, category, description } = item;
            return (
              <li key={_id}>
                {amount}||{category}||{description}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
