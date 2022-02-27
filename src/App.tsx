// import Header from "./components/header/Header";
// import Details from "./components/details/Details";

import { useState } from "react";

import "./App.css";
import CounterValue from "./components/counterValue/CounterValue";
import IncreaseButton from "./components/increaseButton/IncreaseButton";

const App = () => {
  // Hooks
  // Hooks are just functions to have a state in a component

  //useState(3) -> [3, f];
  const [counter, setCounter] = useState(3);

  const increaseNum = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <CounterValue value={counter} />
      <IncreaseButton increaseFun={increaseNum} />
    </div>
  );
};

export default App;
