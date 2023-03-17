import React, { useState } from "react";
import MultiForm from "./MultiForm";

export default function ConditionalRendering() {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoding(true);
  };

  const fetchError = () => {
    setError(true);
  };

  const fetchDataAgain = () => {
      setLoding(false);
      setError(false);
  };



  if (loding)
    return (
      <div>
        <h1>...Loding</h1>
        <button onClick={fetchDataAgain} className="btn btn-success mt-2 m-2">
          Fetch Data Again
        </button>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Some thing went Wrong</h1>
        <button onClick={fetchDataAgain} className="btn btn-success mt-2 m-2">
          Fetch Data Again
        </button>
      </div>
    );

  return (
    <>
      <MultiForm />
      <button onClick={fetchData} className="btn btn-warning mt-2 my-2">
        Fetch Data
      </button>
      <button onClick={fetchError} className="btn btn-danger mt-2 m-2">
        Fetch Error
      </button>
    </>
  );
}
