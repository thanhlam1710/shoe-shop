import React from 'react'
import { useState } from "react";
import '../style/searchWeather.css'

const SearchWeather = () => {
  const api = {
    key: "73f308099d94e959826289ef701da495",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "Februay",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Stempber",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">DỰ BÁO THỜI TIẾT</span>

      </h2>

      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 16
              ? "search-weather warm"
              : "search-weather"
            : "search-weather"
        }
      >
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Tìm kiếm"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>

              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)} °C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </main>
      </div>
    </div>
  )
}

export default SearchWeather