import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useContext } from "react";
import { ThemeContexts1 } from "../contexts/ThemeContexts1";
import { ThemeContexts2 } from "../contexts/ThemeContexts2";
import { ThemeContexts3 } from "../contexts/ThemeContexts3";
import { ThemeContexts4 } from "../contexts/ThemeContexts4";

const View = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const { theme1 } = useContext(ThemeContexts1);
  const { theme2 } = useContext(ThemeContexts2);
  const { theme3 } = useContext(ThemeContexts3);
  const { theme4 } = useContext(ThemeContexts4);

  const fetchData = () => {
    axios
      .get("https://instagramclonedata.herokuapp.com/details/")
      .then((res) => {
        setData(res.data);
      });
  };

  const fetchData2 = () => {
    axios
      .get("https://instagramclonedata.herokuapp.com/education/")
      .then((res) => {
        setData2(res.data);
      });
  };

  const fetchData3 = () => {
    axios
      .get("https://instagramclonedata.herokuapp.com/experience/")
      .then((res) => {
        setData3(res.data);
      });
  };

  const fetchData4 = () => {
    axios
      .get("https://instagramclonedata.herokuapp.com/skills/")
      .then((res) => {
        setData4(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData2();
  }, []);

  useEffect(() => {
    fetchData3();
  }, []);

  useEffect(() => {
    fetchData4();
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 PersonalDetailsBox">
        {theme1 === true
          ? data.map((item, i) => {
              return i === data.length - 1 ? (
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title text-center mb-4">
                        Personal Details
                      </h1>
                      <div className="row">
                        <p className="card-text col">{item.name}</p>
                        <p className="card-text col">{item.email}</p>
                      </div>
                      <div className="row">
                        <p className="card-text col">{item.address}</p>
                        <p className="card-text col">{item.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              );
            })
          : ""}

        {theme2 === true
          ? data2.map((item, i) => {
              return i === data2.length - 1 ? (
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title text-center mb-4">Education</h1>
                      <div className="row">
                        <p className="card-text col">{item.institute}</p>
                        <p className="card-text col">{item.startYear}</p>
                      </div>
                      <div className="row">
                        <p className="card-text col">{item.endYear}</p>
                        <p className="card-text col">{item.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              );
            })
          : ""}

        {theme3 === true
          ? data3.map((item, i) => {
              return i === data3.length - 1 ? (
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title text-center mb-4">
                        Experience
                      </h1>
                      <div className="row">
                        <p className="card-text col">{item.company}</p>
                        <p className="card-text col">{item.startYear}</p>
                      </div>
                      <div className="row">
                        <p className="card-text col">{item.endYear}</p>
                        <p className="card-text col">{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              );
            })
          : ""}

        {theme4 === true
          ? data4.map((item, i) => {
              return i === data4.length - 1 ? (
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title text-center mb-4">Skills</h1>
                      <p className="card-text fw-bold fs-5">{item.skills}</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              );
            })
          : ""}
      </div>
    </>
  );
};

export default View;
