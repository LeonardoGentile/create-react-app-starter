// @flow
import type {Id, Text, VisibilityFilter, TodoAction} from "./types";
import c from "./constants"

let nextTodoId: Id = 0;

// TODO: use payload field
export const addTodo = (text: Text): TodoAction => {
  return {
    type: c.ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = (filter: VisibilityFilter): TodoAction => {
  return {
    type: c.SET_VISIBILITY_FILTER,
    filter
  };
};

export const toggleTodo = (id: Id): TodoAction => {
  return {
    type: c.TOGGLE_TODO,
    id
  };
};

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
