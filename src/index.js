//@flow
// external imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// store & types
import configureStore from "./state/store";
import {todosTypes} from "./state/ducks/todos";

// containers & components
import App from './App';
import './index.css';

// conf
import * as serviceWorker from './serviceWorker';

const reduxStore: todosTypes.TodoStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
