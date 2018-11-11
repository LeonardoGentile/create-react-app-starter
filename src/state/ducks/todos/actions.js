// @flow
import type {Id, Text, VisibilityFilter, Action} from "./types";
import {ACTION_TYPES as a} from "./types";

let nextTodoId: Id = 0;

// TODO: use payload field
export const addTodo = (text: Text): Action => {
  return {
    type: a.ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = (filter: VisibilityFilter): Action => {
  return {
    type: a.SET_VISIBILITY_FILTER,
    filter
  };
};

export const toggleTodo = (id: Id): Action => {
  return {
    type: a.TOGGLE_TODO,
    id
  };
};

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
