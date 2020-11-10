import React, { useState } from "react";
import { useDispatch } from "react";
import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";

const NoteSection = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.notes);

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
        <NoteItem key="index" title={item.title} content={item.content} />;
      })}
    </div>
  );
};

export default NoteSection;
