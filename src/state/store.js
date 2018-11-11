// @flow
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import type {Store as ReduxStore, Dispatch as ReduxDispatch} from "redux";

import * as reducers from "./ducks"; // import all reducers from ducks/index.js
import type {RootState, RootAction} from "./ducks/types";


export type RootStore = ReduxStore<RootState, RootAction>;
export type Dispatch = ReduxDispatch<RootAction>;


/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);

export default function configureStore(initialState: any = {}): RootStore {
  const rootReducer = combineReducers(reducers);
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}
