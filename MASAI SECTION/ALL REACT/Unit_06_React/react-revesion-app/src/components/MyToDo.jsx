import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

const MyToDo = (props) => {
  const [taskData, setTaskData] = useState([]);
  const [addData, setAddData] = useState("");

  const handleChangeTask = (e) => {
    setAddData(e.target.value);
  };

  const fetchData = () => {
    axios.get("http://localhost:3001/addTask").then((res) => {
      setTaskData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTask = () => {
    const jsonData = {
      taskName: addData,
      status: false,
    };
    axios.post("http://localhost:3001/addTask", jsonData).then(() => {
      fetchData();
    });
    setAddData("");
  };


 const handleDelete = (id) => {
   axios.delete(`http://localhost:3001/addTask/${id}`).then(() => {
     fetchData();
   })
 };

 const handleUpdate = (id) => {
   const updatedData = taskData.map((item) => {
     return item.id === id ? { ...item, status: !item.status } : item;
   });
   setTaskData(updatedData);
 };

  return (
    <div>
      <h1 className="mb-4">
        <u>{props.myTitle}</u>
      </h1>
      <div className="d-flex">
        <input
          className="form-control fs-4"
          type="search"
          value={addData}
          placeholder="Enter Task"
          onChange={handleChangeTask}
        />
        <button className="btn btn-info w-25 ms-2 fs-4" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="mt-5 fs-4">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th>No.</th>
              <th>Task Name</th>
              <th>Task Status</th>
              <th>Change Status</th>
              <th>Task Delete</th>
            </tr>
          </thead>
          <tbody>
            {taskData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.taskName}</td>
                  <td>{`${item.status}`}</td>
                  <td>
                    <button
                      className="btn btn-success fs-5"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Change
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger fs-5"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToDo;
