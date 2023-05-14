import React, { useState } from "react";
import Todolist from "../Todolist/Todolist";
import Form from "../Form/Form";
import { v4 as uuid } from "uuid";
import styles from "./Home.module.css";

const Home = () => {
  const list = [
    // {
    //   id: 1,
    //   task: "Learn React",
    //   isCompleted: false,
    // },
    // {
    //   id: 2,
    //   task: "Host your Project",
    //   isCompleted: false,
    // },
    // {
    //   id: 3,
    //   task: "deploy project on mongodb",
    //   isCompleted: true,
    // },
  ];

  const [todos, setTodo] = useState(list);

  function addTodos(todo) {
    setTodo([...todos, { id: uuid(), task: todo, isCompleted: false }]);
  }

  function deleteTodos(todoId) {
    setTodo((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  }

  function markCompleted(todoId) {
    setTodo((prevState) => {
      return prevState.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    });
  }
  return (
    <section className={styles.box}>
      <Form addTodos={addTodos} />
      <Todolist
        todos={todos}
        deleteTodos={deleteTodos}
        markCompleted={markCompleted}
      />
    </section>
  );
};

export default Home;
