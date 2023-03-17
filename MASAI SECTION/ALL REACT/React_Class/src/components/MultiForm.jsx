import React, { useState } from "react";

const iniState = {
  name: "",
  email: "",
  age: "",
  address: "",
  salary: "",
  isMarried: false,
  contry: "",
  department: "",
  photo: "",
};

export default function MultiForm() {
  const [data, setData] = useState(iniState);

  const handleChang = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleClick = () => {
    console.log(data);
  };

  const {
    name,
    email,
    age,
    isMarried,
    contry,
    address,
    salary,
    department,
    photo,
  } = data;

  return (
    <div>
      <h1>Events, useRef, Forms and more</h1>
      <div className="mb-2">
        <label className="form-label">User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
          value={name}
          name="name"
          onChange={handleChang}
        />
      </div>
      <div className="d-flex">
        <div className="mb-2 me-4">
          <label className="form-label">User Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Email"
            value={email}
            name="email"
            onChange={handleChang}
          />
        </div>
        <div className="mb-2 me-4">
          <label className="form-label">User Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Age"
            value={age}
            name="age"
            onChange={handleChang}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Is Married</label>
          <input
            type="checkbox"
            className="form-check-input form-control"
            value={isMarried}
            name="isMarried"
            onChange={handleChang}
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="mb-2 me-4">
          <label className="form-label">User Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Address"
            value={address}
            name="address"
            onChange={handleChang}
          />
        </div>
        <div className="mb-2 me-4">
          <label className="form-label">User Salary</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Salary"
            value={salary}
            name="salary"
            onChange={handleChang}
          />
        </div>

        <div className="mb-2">
          <label className="form-label">User Photo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Photo URL"
            value={photo}
            name="photo"
            onChange={handleChang}
          />
        </div>
      </div>
      <div className="my-4 d-flex">
        <select
          onChange={handleChang}
          value={contry}
          className="form-select me-3"
          name="contry"
        >
          <option defaultValue>Select Contry</option>
          <option value="Mir">Mirzapur</option>
          <option value="Ban">Banaras</option>
          <option value="Rob">Robertsganj</option>
        </select>
        <select
          onChange={handleChang}
          value={department}
          className="form-select"
          name="department"
        >
          <option defaultValue>Select Department</option>
          <option value="FE">Front-End Devloper</option>
          <option value="BE">Back-End Devloper</option>
          <option value="FS">Full Stack Devloper</option>
        </select>
      </div>
      <div className="col-12 mb-2">
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Sign in
        </button>
      </div>
    </div>
  );
}
