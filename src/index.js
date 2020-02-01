import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import noteApp from './reducers';
import App from './components/App';

if (!localStorage.getItem("state")) localStorage.setItem("state", JSON.stringify({folders: []}));

let preloadedState = JSON.parse(localStorage.getItem("state"));

const store = createStore(noteApp, preloadedState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)