import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// import logo from './logo.svg';
// import './App.css';

// const defaultItem = [
//   { text: "cortar cebolla", completed: false },
//   { text: "Tomar el curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Llorar solo", completed: false },
// ];



function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
