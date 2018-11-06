// @flow
import type { Todos, VisibilityFilter } from "./types";
import c from "./constants";

const getVisibleTodos = (todos: Todos, filter: VisibilityFilter): Todos => {
  switch (filter) {
    case c.SHOW_ALL:
      return todos;
    case c.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case c.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default {
  getVisibleTodos
};
