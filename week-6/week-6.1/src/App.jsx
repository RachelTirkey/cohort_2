import React, {fragment} from 'react';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Go to gym from 7-9",
   },
   {
    id: 2,
    title: "Study DSA",
    description: "Study DSA from 9 - 11",
   },
   {
    id: 3,
    title: "Eat a pizza",
    description: "Eat a pizza from 6-8",
  }]);

  function addTodo() {
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.random(),
      description: Math.random()
    }])
  }

  
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}/>
      })}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}








export default App; 