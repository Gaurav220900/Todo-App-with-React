import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [task, setTask] = useState("");

  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  function formSubmitHandler(event) {
    event.preventDefault();
    props.addTodos(task);
    setTask("");
  }
  return (
    <div>
      <h1 className={styles.header}>ToDo-Lists</h1>
      <form onSubmit={formSubmitHandler}>
        <input
          className={styles.input}
          type="text"
          htmlFor="todo"
          onChange={taskHandler}
          placeholder="Add your todos"
          value={task}
        />
        <button className={styles.btn}>Add</button>
      </form>
    </div>
  );
};

export default Form;
