import { createStore, combineReducers } from "redux";
import bookingReducer from "./Reducer/bookingReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
