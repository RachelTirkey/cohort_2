import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from './components/Todos'
// import { use } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  // fetch("http://localhost:3000/todos")
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   });
  // }, []);

  

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
      
    </div>
  )
}

export default App


// function App() {
//   return (
//     <div>
//       <h1>Todo App</h1>
//       <p>React is working!</p>
//     </div>
//   );
// }

// export default App;