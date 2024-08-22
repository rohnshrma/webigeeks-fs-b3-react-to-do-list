import React, { useState } from "react";

const Form = (props) => {
  const [item, setItem] = useState("");

  const inputChangeHandler = (e) => {
    const inputText = e.target.value;
    setItem(inputText);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onAdd(item);

    // setItems((prevItems) => {
    //   return [item, ...prevItems];
    // });
  };

  return (
    <form onSubmit={submitHandler} className="wrapper">
      <div className="form-control">
        <input
          onChange={inputChangeHandler}
          type="text"
          placeholder="Enter Task..."
        />
      </div>
      <button>Add Task</button>
    </form>
  );
};

export default Form;
