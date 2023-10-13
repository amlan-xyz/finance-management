const url = "https://finance-management.theweird0ne.repl.co/finance";

const addEntry = (entry) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_DATA_LOADING" });
    const response = await fetch(`${url}/add-finance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    const { data } = await response.json();
    if (response.status === 201) {
      if (entry.type === "income") {
        dispatch({ type: "ADD_INCOME_SUCCESS", payload: data });
      } else if (entry.type === "expense") {
        dispatch({ type: "ADD_EXPENSE_SUCCESS", payload: data });
      } else {
        dispatch({ type: "ADD_SAVINGS_SUCCESS", payload: data });
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    dispatch({ type: "ADD_DATA_ERROR" });
  }
};

export { addEntry };
