import React, { useState } from "react";
import "./Task.css";

function TaskItem({ todo }) {
  const [todostatus, setTodostatus] = useState(todo.status);

  const heandleStatus = () => {
    if (todostatus === false) {
      setTodostatus(true);
    } else {
      setTodostatus(false);
    }
  };

  return (
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            id="myCheckBox"
            onChange={heandleStatus}
            className="form-check-input mx-5 fs-3 mb-1 border-5"
            type="checkbox"
          />
          <span className="mx-5 px-5 fs-2">{`${todo.tittle} || Status: ${todostatus}`}</span>
          <button type="button" class="btn-close bg-danger"></button>
        </div>
      </div>
  );
}

export { TaskItem };
