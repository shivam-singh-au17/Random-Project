import React, { useState } from "react";
import FetchUser from "./FetchUser";

export default function Github() {
  const [teaxValue, setTeaxValue] = useState("");
  const [isLaoding, setIsLaoding] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setTeaxValue(e.target.value);
  };

  const handleClick = () => {
    setIsLaoding(true);
    FetchUser(teaxValue)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finaly(() => {
        setIsLaoding(false);
      });
  };
  return (
    <div className="container">
      <h1>Git Hub</h1>
      <div className="row">
        <input
          className="form-control"
          onChange={handleChange}
          value={teaxValue}
          type="text"
          placeholder="Enter Here"
        />
        <button
          className="btn btn-info mt-3"
          disabled={isLaoding}
          onClick={handleClick}
        >
          {isLaoding ? "LoAding" : "SEARCH"}
        </button>
      </div>
      {isError ? "Plise Fill In Box" : null}
      <div>
        {users?.map((item) => (
          <div key={item.id}>{item.login}</div>
        ))}
      </div>
    </div>
  );
}
