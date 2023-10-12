const initialState = {
  income: [],
  expense: [],
  savings: [],
  loading: false,
  error: null,
};

export const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_INCOME_SUCCESS":
      return {
        ...state,
        income: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_INCOME_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error fetching income details",
      };
    case "FETCH_SAVINGS_SUCCESS":
      return {
        ...state,
        savings: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_SAVINGS_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error fetching savings details",
      };
    case "FETCH_EXPENSE_SUCCESS":
      return {
        ...state,
        expense: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_EXPENSE_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error fetching expense details",
      };
    case "ADD_DATA_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_INCOME_SUCCESS":
      return {
        ...state,
        income: [...state.income, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_EXPENSE_SUCCESS":
      return {
        ...state,
        expense: [...state.expense, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_SAVINGS_SUCCESS":
      return {
        ...state,
        savings: [...state.savings, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error adding data",
      };
    default:
      return state;
  }
};
