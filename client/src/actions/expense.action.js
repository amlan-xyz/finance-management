const url = "https://finance-management-api-lc7r.onrender.com/finance";

const fetchExpense = () => async (dispatch) => {
  dispatch({ type: "FETCH_DATA_LOADING" });
  try {
    const response = await fetch(`${url}/expense`);
    const { data } = await response.json();
    if (response.status === 200) {
      dispatch({ type: "FETCH_EXPENSE_SUCCESS", payload: data });
    } else {
      throw new Error();
    }
  } catch (error) {
    dispatch({ type: "FETCH_EXPENSE_ERROR" });
  }
};

export { fetchExpense };
