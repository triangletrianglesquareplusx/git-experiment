import React, { useState } from "react";
import Paragraph from "./components/Paragraph";
import "./App.css";

function App() {
  console.log("app running");
  const [name, setName] = useState("");
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Paragraph name={name} />
        <div>
          <input type="text" onChange={changeHandler} />
          <p>Hey this is test remote!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
