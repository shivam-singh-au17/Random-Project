import React, { useState } from "react";

const CounterApp = (props) => {
  const [counter, setCounter] = useState(0);

  const countMinus = () => {
    setCounter(counter - 1);
  };

  const countPlus = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1 className="p-5 bg-dark text-light">{props.myTitle}</h1>
      <div className="p-3 bg-danger fw-bold text-light mt-5">{counter}</div>
      <button className="btn btn-warning fs-1 m-3" onClick={countPlus}>
        Increment
      </button>
      <button className="btn btn-primary fs-1 m-3" onClick={countMinus}>
        Decriment
      </button>
    </div>
  );
};

export default CounterApp;
