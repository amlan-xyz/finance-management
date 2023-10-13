import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../../actions/income.action";
import { Loader } from "../../components/Loader/Loader";

export const Income = () => {
  const dispatch = useDispatch();
  const incomeList = useSelector((state) => state.income);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <>
      <header className="header">Income Details</header>
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
            {incomeList.map(({ _id, category, amount, date, description }) => (
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
              <td>{incomeList.reduce((acc, curr) => acc + curr.amount, 0)}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};
