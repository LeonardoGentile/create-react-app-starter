// @flow
import type {Store as ReduxStore, Dispatch as ReduxDispatch} from "redux";
import c from "./constants";

// Actions
const ADD_TODO = "app/duck/ADD_TODO";
const SET_VISIBILITY_FILTER = "app/duck/SET_VISIBILITY_FILTER";
const TOGGLE_TODO = "app/duck/TOGGLE_TODO";

export const ACTION_TYPES = {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO};

export type Id = number;

export type Text = string;

export type Todo = {
  +id: Id,
  +text: Text,
  +completed: boolean
};

export type Todos = Array<Todo>;


export type VisibilityFilter = c.SHOW_ALL | c.SHOW_COMPLETED | c.SHOW_ACTIVE;


export type todosState = {
  +todos: Todos,
  +visibilityFilter: VisibilityFilter
};

export type Action =
  | { type: ADD_TODO, +id: Id, +text: Text }
  | { type: TOGGLE_TODO, +id: Id }
  | { type: SET_VISIBILITY_FILTER, +filter: VisibilityFilter };

export type TodoStore = ReduxStore<todosState, Action>;

export type Dispatch = ReduxDispatch<Action>;
