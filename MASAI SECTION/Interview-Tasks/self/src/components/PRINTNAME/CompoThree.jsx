import React from "react";
import { firstName, lastName } from "./MainCompo";

const CompoThree = () => {
  return (
    <>
      <firstName.Consumer>
        {(firstName) => {
          return (
            <lastName.Consumer>
              {(lastName) => {
                return (
                  <h1>
                    My Name Is {firstName} {lastName}
                  </h1>
                );
              }}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </>
  );
};

export default CompoThree;
