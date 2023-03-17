import React, { createContext } from "react";
import CompoOne from "./CompoOne";

const firstName = createContext();
const lastName = createContext();

const MainCompo = () => {
  return (
    <div className="text-center my-5">
      <firstName.Provider value={"Shivam"}>
        <lastName.Provider value={"Singh"}>
          <CompoOne />
        </lastName.Provider>
      </firstName.Provider>
    </div>
  );
};

export default MainCompo;
export { firstName , lastName};

