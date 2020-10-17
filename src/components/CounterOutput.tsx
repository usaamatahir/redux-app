import React from "react";
import { useSelector } from "react-redux";

interface OutputType {
  counter: number;
}

const CounterOutput = () => {
  const counter = useSelector((state: OutputType) => state.counter);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default CounterOutput;
