import React from "react";
import CounterInput from "./components/CounterInput";
import CounterOutput from "./components/CounterOutput";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterOutput />
      <CounterInput />
    </div>
  );
}

export default App;
