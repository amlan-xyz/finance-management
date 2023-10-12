const url = "https://finance-management.theweird0ne.repl.co/finance";

const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${url}/income`);
    const { data } = await response.json();
    dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_INCOME_ERROR" });
  }
};

export { fetchIncome };
