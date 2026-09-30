import React, {fragment} from 'react';
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Season 1 is Wow the World1");

  function updateTitle() {
    setTitle("Season 1 is " + Math.random());
  }

  return (
    <div>
      
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="Wow the World2"></Header>
      <Header title="Wow the World3"></Header>
      <Header title="Wow the World4"></Header>
    </div>
  );
}





const Header = React.memo(function Header({title}) {
  return (
    <div>
      {title}
    </div>
  );
}

)


export default App; 