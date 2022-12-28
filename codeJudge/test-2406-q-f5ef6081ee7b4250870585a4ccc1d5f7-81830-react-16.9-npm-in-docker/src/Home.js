import React, { useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {

    const [getData, setGetData] = useState([]);
    const [queryTo, setQueryTo] = useState("");
    const [queryValue, setQueryValue] = useState("");


    const handleChangTo = (e) => {
        setQueryTo(e.target.value);
    };

    const handleToogle = () => {
        const updatedData = getData.map((item) => {
            if (item.name === queryTo) {
                return queryTo;
            }
        });
        setQueryValue(updatedData);
    };


    function getTheStudent() {
        axios.get(`https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json`).then((res) => {
            setGetData(res.data);
        });
    }

    useEffect(() => {
        getTheStudent();
    }, []);

    return (
        <div className="container my-5">
            <div>
                <div
                    className="input-group mb-3 mySearchDiv"
                    style={{ display: "block" }}
                >
                    <div className="d-flex">
                        <input onChange={handleChangTo} className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={(queryTo)=>handleToogle()} className="btn btn-outline-success search-button" type="submit">Search</button>
                    </div>
                    <div>{queryValue}</div>

                </div>

            </div>
            <div>
                <div className="row">
                    {getData.map((item) => {
                        return (
                            <div className={`col-3 country-list-${item.id}`} key={item.id}>
                                <div className="card p-4" style={{ width: "18rem", border: "none" }}>
                                    <img src={item.flag} className="card-img-top" alt="Error" />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><h4>{item.name}</h4></li>
                                        <li className="list-group-item"><b>Population: </b> {item.population}</li>
                                        <li className="list-group-item"><b>Region: </b> {item.region}</li>
                                        <li className="list-group-item"><b>Capital: </b> {item.capital}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
