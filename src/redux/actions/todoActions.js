import actionTypes from "../actionTypes";

export default {
  addtodo: (todo) => ({
    type: actionTypes.ADD_TODO,
    todo,
  }),
  updatetodo: (index, todo) => ({
    type: actionTypes.UPDATE_TODO,
    index,
    todo,
  }),
  deletetodo: (index) => ({
    type: actionTypes.DELETE_TODO,
    index,
  }),
};
