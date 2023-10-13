const url = "https://finance-management.theweird0ne.repl.co/finance";

const fetchSavings = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${url}/savings`);
    const { data } = await response.json();

    if (response.status === 200) {
      dispatch({ type: "FETCH_SAVINGS_SUCCESS", payload: data });
    } else {
      throw new Error();
    }
  } catch (error) {
    dispatch({ type: "FETCH_SAVINGS_ERROR" });
  }
};

export { fetchSavings };
