import React, { useState, useEffect } from "react";
import Paragraph from "./components/Paragraph";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./features/auth/authSlice";
import "./App.css";

function App() {
  console.log("app running");
  const [name, setName] = useState("");
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("effect running");
    const findPerson = async () => {
      try {
        const person = await fetch("https://swapi.dev/api/people/2");
        const response = await person.json();
        setName(response.name);
        dispatch(updateUser(response.name));
      } catch (error) {
        console.log(error);
      }
    };

    findPerson();
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Paragraph name={name} />
        <div>
          <input type="text" onChange={changeHandler} />
          {user && <p>There is some user!</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
