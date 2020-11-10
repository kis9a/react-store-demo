import React from "react";

const TodoItem = ({ title, content, onItemClicked }) => {
  return (
    <div className="TodoItem__container" role="button" onClick={onItemClicked}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TodoItem;
