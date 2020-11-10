import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import inputActions from "../redux/actions/inputActions";

const TodosSection = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  };

  if (todos.length === 0) {
    return (
      <div className="todosSection__container__empty">
        <p>No Todos</p>
      </div>
    );
  }

  return (
    <div className="todosSection__container">
      {todos.map((item, index) => {
        if ((item, index)) {
          return (
            <TodoItem
              key={index}
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TodosSection;
