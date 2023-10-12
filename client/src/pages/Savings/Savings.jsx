import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavings } from "../../actions/savings.action";
export const Savings = () => {
  const dispatch = useDispatch();
  const savingsList = useSelector((state) => state.savings);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);

  return (
    <section className="savings">
      <header className="section__header">Savings Details</header>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <ul>
          {savingsList.map((item) => {
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
