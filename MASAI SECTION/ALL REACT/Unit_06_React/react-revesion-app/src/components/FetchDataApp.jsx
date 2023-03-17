import React, { useEffect, useState } from "react";

const FetchDataApp = (props) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(
      "https://hackathonserverside.herokuapp.com/appData"
    );
    const myData = await response.json();
    setData(myData.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="p-5 bg-dark text-light">{props.myTitle}</h1>
      {data.map((item) => {
        return <h5 key={item._id} className="bg-primary p-2 fs-3 my-4">{item._id}</h5>;
      })}
    </div>
  );
};

export default FetchDataApp;
