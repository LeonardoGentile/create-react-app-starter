// @flow
import { combineReducers } from "redux";
import c from "./constants";

import type { Todos, Todo, Id, Text, TodoAction, VisibilityFilter } from "./types";

/* state shape
todosState {
  todos: [],
  visibilityFilter: "SHOW_ALL"
} */

function createTodo(id: Id, text: Text): Todo {
  return { id, text, completed: false };
}

function toggleTodo(todos: Todos, id: Id): Todos {
  return todos.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    return Object.assign({}, todo, { completed: !todo.completed });
  });
}

const todos = (state: Todos = [], action: TodoAction): Todos => {
  switch (action.type) {
    case c.ADD_TODO:
      const payload = action.payload;
      return [...state, createTodo(payload.id, payload.text)];
    case c.TOGGLE_TODO:
      return toggleTodo(state, action.payload.id);
    default:
      return state;
  }
};


const visibilityFilter = (
  state: VisibilityFilter = c.SHOW_ALL,
  action: TodoAction
): VisibilityFilter => {
  switch (action.type) {
    case c.SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

// Necessary to extract the state from reducers
const reducers = {
  todos,
  visibilityFilter
};

export type todosReducersTypes = typeof reducers;


const todosReducers = combineReducers(reducers);

export default todosReducers;
