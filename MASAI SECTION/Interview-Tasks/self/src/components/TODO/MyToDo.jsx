import React, { useEffect, useState } from "react";
import axios from "axios";
import OneItem from "./OneItem";

const MyToDo = () => {
  const [taskName, setTaskName] = useState("");
  const [addTask, setAddTask] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3001/myToDo").then((res) => {
      setAddTask(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeInput = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    const jsonData = {
      taskName: taskName,
      taskStatus: false,
    };
    axios.post("http://localhost:3001/myToDo", jsonData).then(() => {
      fetchData();
    });
    setTaskName("");
  };

  const handleChangeStatus = (item) => {
    const jsonData = {
      taskName: item.taskName,
      taskStatus: item.taskStatus === false ? true : false,
    };
    axios.put(`http://localhost:3001/myToDo/${item.id}`, jsonData).then(() => {
      fetchData();
    });
  };

  const handleChangeDelete = (id) => {
    axios.delete(`http://localhost:3001/myToDo/${id}`).then(() => {
      fetchData();
    });
  };

  return (
    <>
      <div className="d-flex my-5">
        <input
          value={taskName}
          type="text"
          className="form-control fs-5"
          placeholder="Enter Task ..."
          onChange={handleChangeInput}
        />
        <button className="btn btn-info ms-3 w-25 fs-5" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div>
        <table className="table table-hover fs-5 text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Task Name</th>
              <th>Task Status</th>
              <th>Change Status</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {addTask.map((item) => {
              return (
                <OneItem
                  item={item}
                  handleChangeStatus={handleChangeStatus}
                  handleChangeDelete={handleChangeDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToDo;
