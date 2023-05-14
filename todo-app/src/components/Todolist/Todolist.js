import React from "react";
import Todos from "../Todos/Todos";

const Todolist = ({ todos, deleteTodos, markCompleted }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Todos
            key={todo.id}
            id={todo.id}
            task={todo.task}
            isCompleted={todo.isCompleted}
            deleteTodos={deleteTodos}
            markCompleted={markCompleted}
          />
        );
      })}
    </ul>
  );
};

export default Todolist;
