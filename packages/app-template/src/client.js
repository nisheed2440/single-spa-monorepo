import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';
import createStore from './store';

// Read the state sent with markup
const state = window.APP_TEMPLATE_STATE;

// delete the state from global window object
delete window.APP_TEMPLATE_STATE;

// reproduce the store used to render the page on server
const store = createStore(state);

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent(props) {
        return <App store={store} {...props} />;
    },
    errorBoundary() {
        // Customize the root error boundary for your microfrontend here.
        return null;
    },
    renderType: 'hydrate',
});

export const { bootstrap, mount, unmount } = lifecycles;
