import React from "react";
import { useDispatch, useSelector } from "react-redux";
import todoActions from "../redux/actions/todoActions";
import inputActions from "../redux/actions/inputActions";

const InputSection = () => {
  const id = useSelector((state) => state.inputs.id);
  const title = useSelector((state) => state.inputs.title);
  const content = useSelector((state) => state.inputs.content);
  const dispatch = useDispatch();

  const addtodo = () => {
    if (title && content) {
      dispatch(
        todoActions.addtodo({
          title,
          content,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  const updatetodo = () => {
    if (title && content) {
      dispatch(
        todoActions.updatetodo(id, {
          title,
          content,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  const deletetodo = () => {
    dispatch(todoActions.deletetodo(id));
    dispatch(inputActions.resetInputs());
  };

  return (
    <div className="InputSection__container">
      <input
        type="text"
        placeholder="todo title"
        value={title}
        onChange={(e) => dispatch(inputActions.setInputTitle(e.target.value))}
      />
      <textarea
        placeholder="todo content"
        value={content}
        onChange={(e) => dispatch(inputActions.setInputContent(e.target.value))}
      ></textarea>
      <div className="InputSection__container__btnWrapper">
        <button onClick={id === -1 ? addtodo : updatetodo}>
          {id === -1 ? "ADD todo" : "UPDATE todo"}
        </button>
        {id !== -1 && (
          <button
            onClick={deletetodo}
            style={{ marginLeft: "1em", backgroundColor: "red" }}
          >
            DELETE todo
          </button>
        )}
      </div>
    </div>
  );
};

export default InputSection;
