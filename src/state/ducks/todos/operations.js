// @flow
import actions from "./actions";

// Simple links to actions
const addTodo = actions.addTodo;

const setVisibilityFilter = actions.setVisibilityFilter;

const toggleTodo = actions.toggleTodo;

// This is a thunk which dispatches multiple actions from actions.js
// const complexOperation = (distance) => (dispatch) => {
//   dispatch(actions.quack())
//     .then(() => {
//       dispatch(actions.swim(distance));
//       dispatch(/* any action */);
//     });
// };

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
