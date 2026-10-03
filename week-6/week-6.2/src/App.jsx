import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
    axios.get("https://dummyjson.com/todos")
      .then(function(res){
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });

    // setTodos([
    //   { id: 1, title: "Learn React", description: "Understand useEffect and state" },
    //   { id: 2, title: "Build Projects", description: "Create fullstack apps" },
    // ]);
},[]);

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.todo} description={todo.completed ? "Completed" : "Pending"}></Todo>)}
  </div>
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App;