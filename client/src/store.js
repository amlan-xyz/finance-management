import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { financeReducer } from "./reducers/finance.reducer";

const store = createStore(financeReducer, applyMiddleware(thunk));

export default store;
