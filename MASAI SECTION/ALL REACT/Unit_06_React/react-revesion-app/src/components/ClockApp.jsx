import React, { useEffect, useState } from "react";

const ClockApp = (props) => {
  const [myTime, setMyTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setMyTime(new Date());
    }, 1000);
  }); // add [] this

  return (
    <div className="my-5">
      <h1 className="p-5 bg-dark text-light">{props.myTitle}</h1>
      <h3 className="display-1 fw-bold text-info mt-5">
        {myTime.toDateString()} - {myTime.toLocaleTimeString()}
      </h3>
    </div>
  );
};

export default ClockApp;
