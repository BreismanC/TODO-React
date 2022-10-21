import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalToDos, completedToDos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedToDos} de {totalToDos} TODOs
    </h2>
  );
}

export { TodoCounter };
