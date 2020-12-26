import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import configureStore from "./store";
import Root from "./root.component";

export default function render(initialState, props) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState);

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store}>
      <Root {...props} />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  return `
    <script>
      window.__SPA_NAV_STATE__ = window.__SPA_NAV_STATE__ || ${JSON.stringify(
        preloadedState
      )};
    </script>
    ${content}
  `;
}