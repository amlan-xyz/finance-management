import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../../actions/income.action";

export const Income = () => {
  const dispatch = useDispatch();
  const incomeList = useSelector((state) => state.income);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <section className="income">
      <header className="section__header">Income Management</header>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {incomeList.map((item) => {
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
