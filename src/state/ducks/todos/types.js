// @flow
import c from "./constants";

// STATE COMPONENTS
export type Id = number;

export type Text = string;

export type Todo = {
  +id: Id,
  +text: Text,
  +completed: boolean
};

export type Todos = Array<Todo>;

// Filters
export type VisibilityFilter =
  | c.SHOW_ALL
  | c.SHOW_COMPLETED
  | c.SHOW_ACTIVE;


// Actions
type AddAction = {
  type: c.ADD_TODO,
  +payload: {
    id: Id,
    text: Text
  }
}

type ToggleAction = {
  type: c.TOGGLE_TODO,
  +payload: {
    id: Id
  }
}

type SetFilterAction = {
  type: c.SET_VISIBILITY_FILTER,
  +payload: {
    filter: VisibilityFilter
  }
}

export type TodoAction =
  | AddAction
  | ToggleAction
  | SetFilterAction


