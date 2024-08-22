import React from "react";

const Note = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="item wrapper">
      <h2>{props.item}</h2>
      <button onClick={clickHandler}>X</button>
    </div>
  );
};

export default Note;
