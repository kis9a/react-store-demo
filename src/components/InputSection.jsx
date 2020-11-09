import React from "react";
import { useSelector, useDispatch } from "react-redux";
import noteActions from "../redux/actions/noteActions";
import inputActions from "../redux/actions/inputActions";

const InputSection = () => {
  const id = useSelector((state) => state.inputs.id);
  const title = useSelector((state) => state.input.title);
  const content = useSelector((state) => state.input.content);
  const dispatch = useDispatch();

  const addNote = () => {
    if (title && content) {
      dispatch(
        noteActions.addNote({
          title,
          content,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Input title"
        value={title}
        onChange={(e) => dispatch(inputActions.setInputTitle(e.target.value))}
      />
      <textarea
        name="content"
        placeholder="Input content"
        value={content}
        cols="30"
        rows="5"
        onChange={(e) => dispatch(inputActions.setInputContent(e.target.value))}
      ></textarea>
      <button onClick={addNote}>ADD</button>
    </div>
  );
};

export default InputSection;
