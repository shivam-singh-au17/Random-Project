import React, { useState } from "react";

const hacktoberfest = require("hacktoberfest-issue-hunt");

const options = {
  token: "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", // replace it with your token
  labels: "first-timers-only",
  limit: 10,
  language: "js",
  ignoreClosed: false, // default is true
  complete: false, // default is false
};

const ListData = () => {
  const [appData, setAppData] = useState([]);

  hacktoberfest(options)
      .then((issues) => {
          setAppData(issues);
          console.log(issues);
      })
  .catch(console.log);

//   hacktoberfest({ token: "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" })
//     .then((issues) => {
//       setAppData(issues);
//     })
//     .catch(console.log);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr className="bg-dark text-light">
            <th scope="col">Title</th>
            <th scope="col">State</th>
            <th scope="col">Comments</th>
            <th scope="col">Create Date</th>
          </tr>
        </thead>
        <tbody>
          {appData.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.title}</td>
                <td>{item.state}</td>
                <td>{item.comments}</td>
                <td>{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListData;
