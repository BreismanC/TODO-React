import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
    const totalToDos = toDos.length;

    let searchedToDos = [];

    if (!searchValue.length >= 1) {
        searchedToDos = toDos;
    } else {
        searchedToDos = toDos.filter((toDo) => {
            const toDoText = toDo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return toDoText.includes(searchText);
        });
    }

    const addToDo = (text) => {

        const newToDos = [...toDos];
        newToDos.push({
            completed: false,
            text,
        });
        saveToDos(newToDos);
    }

        const CompleteToDo = (text) => {
            const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);

            const newToDos = [...toDos];
            newToDos[toDoIndex].completed = true;
            saveToDos(newToDos);
            // item[toDoIndex] = {
            //   text: item[toDoIndex].text,
            //   completed: true,
            // };
        };

        const deleteToDo = (text) => {
            const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);

            const newToDos = [...toDos];
            newToDos.splice(toDoIndex, 1);
            saveToDos(newToDos);
        };

    return (
        <TodoContext.Provider
        value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            addToDo,
            CompleteToDo,
            deleteToDo,
            openModal,
            setOpenModal,
        }}
        >
        {props.children}
        </TodoContext.Provider>
    );
    }


export { TodoContext, TodoProvider };

