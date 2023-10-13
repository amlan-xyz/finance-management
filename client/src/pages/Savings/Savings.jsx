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
    <>
      <header className="header">Savings Details</header>
      {loading ? (
        <p>Loading....</p>
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
            {savingsList.map(({ _id, category, amount, date, description }) => (
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
              <td>{savingsList.reduce((acc, curr) => acc + curr.amount, 0)}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};
