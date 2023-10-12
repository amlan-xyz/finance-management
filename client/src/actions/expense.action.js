const url = "https://finance-management.theweird0ne.repl.co/finance";

const fetchExpense = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${url}/expense`);
    const { data } = await response.json();
    console.log(data);
    dispatch({ type: "FETCH_EXPENSE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_EXPENSE_ERROR" });
  }
};

export { fetchExpense };
