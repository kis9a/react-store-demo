import actionTypes from "../actionTypes";

const initialState = {
  id: -1,
  title: "",
  content: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_TITLE: {
      const { title } = action;
      return {
        ...state,
        title,
      };
    }
    case actionTypes.SET_INPUT_CONTENT: {
      const { content } = action;
      return {
        ...state,
        content,
      };
    }
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      console.log("hello");
      return {
        ...state,
        id,
      };
    }
    default:
      return state;
  }
};
