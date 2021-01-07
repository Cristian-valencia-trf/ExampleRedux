import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

// Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//declare store
let store = createStore(rootReducer, composeEnhancers());

export default store;
