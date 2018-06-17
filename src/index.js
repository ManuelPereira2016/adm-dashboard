import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import Provider from "react-redux/es/components/Provider";
import {
  connectRouter,
  ConnectedRouter,
  routerMiddleware
} from "connected-react-router";
import * as reducers from "./redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

const appReducer = combineReducers({
  ...reducers
});

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(appReducer),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
