const url = "https://finance-management-api-lc7r.onrender.com/finance";

const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${url}/income`);
    const { data } = await response.json();
    if (response.status === 200) {
      dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data });
    } else {
      throw new Error();
    }
  } catch (error) {
    dispatch({ type: "FETCH_INCOME_ERROR" });
  }
};

export { fetchIncome };
