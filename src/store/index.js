import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export default (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
};
