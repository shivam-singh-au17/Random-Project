import React, { useState } from 'react'
import './App.css';
import { useFetch } from './useFetch';
import cloudy from "./img/cloudy.svg";
import sunny from "./img/sunny.svg";

const Home = () => {
    const [queryFrom, setQueryFrom] = useState("");
    const [from, setFrom] = useState("");

    const { loading, error, data } = useFetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${queryFrom}&units=metric&appid=43df43066e5d8f7d79aa588b3b447c58`
    );

    const handleChangFrom = (e) => {
        setQueryFrom(e.target.value);
        setFrom(e.target.value);
    };

    return (
        <div className="container mt-3">
            <div className="mainContainer">
                <div className="mainBox mb-3">
                    <div className="search fs-5">
                        <i className="fa fa-map-marker me-2"></i>
                        <input
                            value={from}
                            id="search"
                            type="search"
                            placeholder=" Search"
                            autoComplete="off"
                            onChange={handleChangFrom}
                        />
                        <i className="fa fa-search ms-2"></i>
                    </div>
                    {!queryFrom.trim() ? (
                        <></>
                    ) : loading ? (
                        <div className="suggestions mt-2">
                            <h4>Loading...</h4>
                        </div>
                    ) : error ? (
                        <div className="suggestions mt-2">
                            <h4>No match !</h4>
                        </div>
                    ) : (
                        <div className="suggestions">
                            <table className="table table-hover fs-5">
                                <tbody>
                                    {/* {data
                                    ? data.map((el) => ( */}
                                    <tr
                                        button
                                        onClick={() => {
                                            setFrom(`${data.name}, ${data.sys.country}`);
                                            setQueryFrom("");
                                        }}
                                        key={data.id}
                                    >
                                        <td>
                                            {data.name}, {data.sys.country}
                                        </td>
                                    </tr>
                                    ))
                                    {/* : ""} */}
                                </tbody>
                            </table>
                        </div>
                    )}


                </div>

                <div>
                    <section className="DailyForecastSection">
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={sunny}
                                    alt="Clear"
                                />
                                <p>Clear</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={sunny}
                                    alt="Clear"
                                />
                                <p>Clear</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={cloudy}
                                    alt="Clouds"
                                />
                                <p>Cloudy</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={sunny}
                                    alt="Clear"
                                />
                                <p>Clear</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={cloudy}
                                    alt="Clouds"
                                />
                                <p>Cloudy</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={sunny}
                                    alt="Clear"
                                />
                                <p>Clear</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={sunny}
                                    alt="Clear"
                                />
                                <p>Clear</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={sunny}
                                    alt="Clear"
                                />
                                <p>Clear</p>
                            </div>
                        </div>
                        <div className="DailyForecastDiv" >
                            <input
                                className="DailyForecastInput"
                                type="radio"
                                name="Day_Name"
                                value="0" />
                            <div className="ForecastData">
                                <p>Tue</p>
                                <p>
                                    <span>23 °</span>
                                    <span>33 °</span>
                                </p>
                                <img
                                    className="ForecastIcon"
                                    src={cloudy}
                                    alt="Clouds"
                                />
                                <p>Cloudy</p>
                            </div>
                        </div>
                    </section>
                </div >


                <div>
                    <section className="DetailedForecastSection">
                        <div className="CurrentTempDiv">
                            <h1 className="CurrentTemp">43°C</h1>
                            <img className="CurrentTempImg" src={cloudy} alt="Clouds" />
                        </div>
                        <div className="ApexGraph">
                            dummy
                        </div>
                        <div className="OtherForecastData">
                            <div className="OtherData">
                                <span className="bold">Pressure</span
                                ><span>55 hpa</span>
                            </div>
                            <div className="OtherData">
                                <span className="bold">Humidity</span
                                ><span>77 %</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify">
                                <div className="SunriseData">
                                    <span className="bold">Sunrise</span
                                    ><span>06:00 am</span>
                                </div>
                                <div className="SunriseData">
                                    <span className="bold">Sunset</span
                                    ><span>07:00 pm</span>
                                </div>
                            </div>

                            <div style={{ height: "200px" }}>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <div
                                        style={{
                                            position: "relative",
                                            cursor: "default",
                                            width: "100 %",
                                            height: "200px"
                                        }}
                                    >
                                        <svg
                                            style={{ width: "100%" }}
                                            height="200"
                                            viewBox="0 0 704 200"
                                            version="1.1"
                                        >
                                            <defs>
                                                <clipPath>
                                                    <rect x="18" y="0" height="170" width="676"></rect>
                                                </clipPath>
                                            </defs>
                                            <defs>
                                                <linearGradient id="time" x1="0" y1="0" x2="0" y2="1">
                                                    <stop
                                                        offset="5%"
                                                        stop-color="#F7E0AF"
                                                        stop-opacity="0.6"
                                                    ></stop>
                                                    <stop
                                                        offset="90%"
                                                        stop-color="#F7E0AF"
                                                        stop-opacity="0.1"
                                                    ></stop>
                                                </linearGradient>
                                            </defs>
                                            <g style={{ width: "100%" }}>
                                                <line
                                                    style={{ width: "100%" }}
                                                    height="30"
                                                    x="18"
                                                    y="170"
                                                    stroke="#666"
                                                    fill="none"
                                                    x1="18"
                                                    y1="170"
                                                    x2="694"
                                                    y2="170"
                                                ></line>
                                                <g style={{ width: "100%" }}>
                                                    <g>
                                                        <text
                                                            style={{ width: "100%" }}
                                                            height="30"
                                                            x="18"
                                                            y="178"
                                                            stroke="none"
                                                            fill="#666"
                                                            text-anchor="middle"
                                                        >
                                                            <tspan x="18" dy="0.71em">5am</tspan>
                                                        </text>
                                                    </g>
                                                    <g>
                                                        <text
                                                            width="676"
                                                            height="30"
                                                            x="187"
                                                            y="178"
                                                            stroke="none"
                                                            fill="#666"
                                                            text-anchor="middle"
                                                        >
                                                            <tspan x="187" dy="0.71em"></tspan>
                                                        </text>
                                                    </g>
                                                    <g>
                                                        <text
                                                            width="676"
                                                            height="30"
                                                            x="356"
                                                            y="178"
                                                            stroke="none"
                                                            fill="#666"
                                                            text-anchor="middle"
                                                        >
                                                            <tspan x="356" dy="0.71em">2am</tspan>
                                                        </text>
                                                    </g>
                                                    <g>
                                                        <text
                                                            width="676"
                                                            height="30"
                                                            x="525"
                                                            y="178"
                                                            stroke="none"
                                                            fill="#666"
                                                            text-anchor="middle"
                                                        >
                                                            <tspan x="525" dy="0.71em"></tspan>
                                                        </text>
                                                    </g>
                                                    <g>
                                                        <text
                                                            width="676"
                                                            height="30"
                                                            x="688.0062494277954"
                                                            y="178"
                                                            stroke="none"
                                                            fill="#666"
                                                            text-anchor="middle"
                                                        >
                                                            <tspan x="688.0062494277954" dy="0.71em">6pm</tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        stroke="none"
                                                        fill="url(#time)"
                                                        fill-opacity="0.6"
                                                        width="676"
                                                        height="170"
                                                        d="M187,141.66666666666666C243.33333333333334,113.33333333333333,299.6666666666667,56.666666666666664,356,56.666666666666664C412.3333333333333,56.666666666666664,468.6666666666667,113.33333333333333,525,141.66666666666666C581.3333333333334,170,637.6666666666666,170,553.1666666666666,170C468.6666666666667,170,243.33333333333334,170,158.83333333333334,170C74.33333333333333,170,130.66666666666666,170,187,141.66666666666666M525,170C468.6666666666667,170,412.3333333333333,170,356,170C299.6666666666667,170,243.33333333333334,170,187,170C130.66666666666666,170,74.33333333333333,170,158.83333333333334,170C243.33333333333334,170,468.6666666666667,170,553.1666666666666,170C637.6666666666666,170,581.3333333333334,170,525,170"
                                                    ></path>
                                                    <path
                                                        stroke="#FEDB41"
                                                        fill="none"
                                                        fill-opacity="0.6"
                                                        width="676"
                                                        height="170"
                                                        d="M187,141.66666666666666C243.33333333333334,113.33333333333333,299.6666666666667,56.666666666666664,356,56.666666666666664C412.3333333333333,56.666666666666664,468.6666666666667,113.33333333333333,525,141.66666666666666C581.3333333333334,170,637.6666666666666,170,553.1666666666666,170C468.6666666666667,170,243.33333333333334,170,158.83333333333334,170C74.33333333333333,170,130.66666666666666,170,187,141.66666666666666"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div
                                        style={{
                                            position: "absolute",
                                            width: "0px",
                                            height: "0px",
                                            visibility: "hidden",
                                            display: "none"
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div></div>
                <div></div>
                <div></div>

            </div>

        </div>
    )
}

export default Home
