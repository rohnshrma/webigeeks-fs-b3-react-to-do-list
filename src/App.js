import React, { useState } from "react";
import "./style.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Note from "./Components/Note";

const App = () => {
  const [items, setItems] = useState([]);

  const addTaskHandler = (item) => {
    console.log(item);
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };

  const deleteTaskHandler = (id) => {
    console.log("deleting", id);
    setItems((prevItems) => {
      return prevItems.filter((prevItem, index) => {
        return index !== id;
      });
    });
  };

  // const content
  return (
    <div className="App">
      <Header />
      <main>
        <Form onAdd={addTaskHandler} />
      </main>

      <div className="items">
        {items.map((item, index) => {
          return (
            <Note
              item={item}
              key={index}
              id={index}
              onDelete={deleteTaskHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
