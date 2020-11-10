import actionTypes from "../actionTypes";

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      const notes = state.notes;
      notes.push(action.notes);
      return {
        notes,
      };
    }
    case actionTypes.UPDATE_TODO: {
      const { index } = action;
      const notes = state.notes;
      notes[index] = note;
      return {
        notes,
      };
    }
    case actionTypes.REMOVE_TODO: {
      const { index } = action;
      const notes = state.notes;
      delete notes[index];
      return {
        notes,
      };
    }
    default:
      return state;
  }
};
