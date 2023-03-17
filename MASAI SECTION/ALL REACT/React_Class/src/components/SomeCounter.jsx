import { useEffect, useState, useRef } from "react";
import React from "react";

export default function SomeCounter() {
  const [counter, setCounter] = useState(0);
  const [started, setStarted] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (started) {
      return;
    }
    setStarted(true);
    timerRef.current = setInterval(() => {
      setCounter((prev) => {
        return prev + 1;
      });
    }, 1000);
    return () => {
      console.log("Unmounting Phase");
      clearInterval(timerRef.current);
    };
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div>
      <h1>Count is {counter} </h1>
      <button
        className="btn btn-warning"
        onClick={() => {
          setStarted(false);
          clearInterval(timerRef.current);
        }}
      >
        Pause
      </button>
      <button
        className="btn btn-info m-3"
        onClick={() => {
          startTimer();
        }}
      >
        Start
      </button>
    </div>
  );
}
