import React from "react";
import MyToDo from "./TODO/MyToDo";
import NavBar from "./NAVBAR/NavBar";
import MainCompo from "./PRINTNAME/MainCompo";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <MyToDo />
        <MainCompo />
      </div>
    </>
  );
};

export default Home;
