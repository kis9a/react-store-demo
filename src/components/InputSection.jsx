import React from "react";

const InputSection = () => {
  return (
    <div>
      <input type="text" placeholder="Input title" />
      <textarea
        name="content"
        placeholder="Input content"
        cols="30"
        rows="5"
      ></textarea>
      <button>ADD</button>
    </div>
  );
};

export default InputSection;
