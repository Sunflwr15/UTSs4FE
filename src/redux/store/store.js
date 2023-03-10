import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { logger, logger2 } from "../middleware/logger";
import { isAuth } from "../reducers/authReducer";
import { colorReducer } from "../reducers/colorReducer";
import { reducer } from "../reducers/countReducer";
import thunk from "redux-thunk";


let allReducers = combineReducers({
  // count: reducer,
  color: colorReducer,
  login: isAuth,
});

// export const store = legacy_createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = legacy_createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
