import actionTypes from "../actionTypes";

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      const todos = [...state.todos];
      todos.push(action.todo);
      return {
        todos,
      };
    }
    case actionTypes.UPDATE_TODO: {
      const { index, todo } = action;
      const todos = [...state.todos];
      todos[index] = todo;
      return {
        todos,
      };
    }
    case actionTypes.DELETE_TODO: {
      const { index } = action;
      const todos = [];
      state.todos.forEach((todo, i) => {
        if (index !== i) {
          todos.push(todo);
        }
      });
      return {
        todos,
      };
    }
    default:
      return state;
  }
};
