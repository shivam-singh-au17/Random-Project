import React, { useState } from "react";
import "./style.css";
import UserDetails from "./UserDetails";
import { useContext } from "react";
import { ThemeContexts1 } from "../contexts/ThemeContexts1";
import axios from "axios";

const Create = () => {
  const { theme1, handleChangeTheme1 } = useContext(ThemeContexts1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    const jsonData = {
      name: name,
      email: email,
      address: address,
      phone: phone,
    };
    axios.post("https://instagramclonedata.herokuapp.com/details/", jsonData);
    alert("Successfully Submited ...");
    handleChangeTheme1();
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
  };

  return (
    <>
      <div className="row maxWidth">
        <div className="col-4">
          <UserDetails />
        </div>
        <div className="col-8">
          <div className="PersonalDetailsBox">
            <div className="mt-5 fs-5">
              <h1 className="my-1">Personal Details</h1>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary px-5 btn-lg float-end"
                disabled={theme1}
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
