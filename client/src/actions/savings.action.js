const url = "https://finance-management.theweird0ne.repl.co/finance";

const fetchSavings = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${url}/savings`);
    const { data } = await response.json();
    dispatch({ type: "FETCH_SAVINGS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_SAVINGS_ERROR" });
  }
};

export { fetchSavings };
