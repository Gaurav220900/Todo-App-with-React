import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todos.module.css";

const Todos = ({ id, task, isCompleted, deleteTodos, markCompleted }) => {
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onChange={() => markCompleted(id)}
      />
      <span
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        className={styles["todo-text"]}
      >
        {task}
      </span>
      <span className={styles["todo-icons"]} onClick={() => deleteTodos(id)}>
        <FaTrashAlt />
      </span>
    </li>
  );
};

export default Todos;
