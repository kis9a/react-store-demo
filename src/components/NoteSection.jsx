import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteItem from "./NoteItem";
import inputActions from "../redux/actions/inputActions";

const NoteSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const onItemClick = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  };

  if (!notes || notes.length === 0) {
    return (
      <div>
        <p>There is no items</p>
      </div>
    );
  }

  return (
    <div>
      {notes.map((item, index) => {
        <NoteItem
          key="index"
          title={item.title}
          content={item.content}
          onItemClick={onItemClick(item, index)}
        />;
      })}
    </div>
  );
};

export default NoteSection;
