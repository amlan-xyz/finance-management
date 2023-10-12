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
          {incomeList &&
            incomeList.map((income) => (
              <li key={income._id}>
                {income.income_amount} || {income.income_type}
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};
