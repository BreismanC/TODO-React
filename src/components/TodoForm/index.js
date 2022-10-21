import React from 'react';
import { TodoContext } from "../TodoContext";
import './TodoForm.css';


function TodoForm() {

    const [newTodoValue, setNewTOdoValue] = React.useState("");
    const { addToDo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTOdoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newTodoValue);
        setOpenModal(false);
    };

    return (
      <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Ingresa una tarea para realizar"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Añadir
          </button>
          <button
            onClick={onCancel}
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
          >
            Cancelar
          </button>
        </div>
      </form>
    );
}

export { TodoForm };