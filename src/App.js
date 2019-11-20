import React, { useState, useEffect } from "react";
import "./css/App.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
//Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  const [nasa, setNasa] = useState({
    response: {},
    loading: true,
    date: new Date(),
    error: false
  });

  const formattedDate = date => {
    const mydate = date.toLocaleDateString().split("/");
    return `${mydate[2]}-${mydate[0]}-${mydate[1]}`;
  };

  const apiKey = "nRNhFy0BNk1c1UcEHRkYR41KDaQLS8JaOLfCukR8";
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate(
    nasa.date
  )}`;

  const getNasaData = () => {
    axios
      .get(apiUrl)
      .then(response => {
        setNasa({
          ...nasa,
          response: response.data,
          loading: false,
          error: false,
          errorMessage: ""
        });
      })
      .catch(error =>
        setNasa({
          ...nasa,
          response: {},
          loading: false,
          error: true,
          errorMessage: `${error.response.data.code}: ${error.response.data.msg}`
        })
      );
  };

  const handleDateChange = (date, to = "") => {
    to === "yesterday"
      ? setNasa({
          ...nasa,
          date: new Date(new Date(date).setDate(new Date(date).getDate() - 1)),
          loading: true,
          error: false
        })
      : to === "tomorrow"
      ? setNasa({
          ...nasa,
          date: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
          loading: true,
          error: false
        })
      : setNasa({ ...nasa, date: new Date(date), loading: true, error: false });
  };

  useEffect(getNasaData, [nasa.date]);

  console.log("My State", nasa);
  return (
    <div className="App">
      <Header />

      <section className="content">
        <Navigation
          nasa={nasa}
          setNasa={setNasa}
          handleDateChange={handleDateChange}
        />
        {nasa.loading ? (
          <div className="spinner"></div>
        ) : nasa.error ? (
          <div className="error">
            <h2>{nasa.errorMessage}</h2>
            <p>
              We had trouble retrieving the information from NASA servers.
              Please try again with a different time selection. Remember the
              earliest NASA Picture of the Day entry is on
              <button
                onClick={() =>
                  setNasa({
                    ...nasa,
                    date: new Date("1995-06-17"),
                    loading: true,
                    error: false
                  })
                }
              >
                June 16, 1995!
              </button>
            </p>
          </div>
        ) : (
          <Card nasa={nasa.response} />
        )}
      </section>
      <Footer />
    </div>
  );
};

export default App;
