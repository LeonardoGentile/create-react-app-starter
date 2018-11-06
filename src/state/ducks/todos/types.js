// @flow
import type {Store as ReduxStore, Dispatch as ReduxDispatch} from "redux";
import c from "./constants";

// Actions
const ADD_TODO = "app/duck/ADD_TODO";
const SET_VISIBILITY_FILTER = "app/duck/SET_VISIBILITY_FILTER";
const TOGGLE_TODO = "app/duck/TOGGLE_TODO";

type Id = number;

type Text = string;

type Todo = {
  +id: Id,
  +text: Text,
  +completed: boolean
};

type Todos = Array<Todo>;


type VisibilityFilter = c.SHOW_ALL | c.SHOW_COMPLETED | c.SHOW_ACTIVE;


type todosState = {
  +todos: Todos,
  +visibilityFilter: VisibilityFilter
};

type Action =
  | { type: ADD_TODO, +id: Id, +text: Text }
  | { type: TOGGLE_TODO, +id: Id }
  | { type: SET_VISIBILITY_FILTER, +filter: VisibilityFilter };

type Store = ReduxStore<todosState, Action>;

type Dispatch = ReduxDispatch<Action>;


export {
  Id,
  Text,
  Todo,
  Todos,
  VisibilityFilter,
  todosState,
  Action,
  Store,
  Dispatch,
}

export default {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
}
