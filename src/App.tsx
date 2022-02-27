// import Header from "./components/header/Header";
// import Details from "./components/details/Details";

import { useState } from "react";

import "./App.css";

let a = 3;
const App = () => {
  // Hooks
  // Hooks are just functions to have a state in a component

  //useState(3) -> [3, f];
  const [counter, setCounter] = useState(3);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const increaseNum = () => {
    setCounter(counter + 1);
    a = a + 1;
    // const elem = document.getElementById("123") as HTMLElement;
    // if (elem) {
    //   elem.innerHTML = a.toString();
    // }
    console.log(a);
  };

  return (
    <div>
      <h2>{counter} counter</h2>
      <h2 id="123">{a} a</h2>
      <button onClick={increaseNum}>add</button>
      {/* <Header name="Amir Ali" age={32} />
      <Details userData="He is a developer" />
      <Header name="Asad Ali" age={52} />
      <Details userData="He is a police officer" />
      <Header name="Raza Ali" age={72} />
      <Details userData="He is a army officer" /> */}
    </div>
  );
};

export default App;
