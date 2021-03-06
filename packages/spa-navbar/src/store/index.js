import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import settings from "./reducers/settingsReducer";

const rootReducer = combineReducers({
  settings,
});

export default function configureStore(initialState) {
  const composeEnhancers = compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
}
