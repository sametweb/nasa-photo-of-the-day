import React, { useState, useEffect } from "react";
import "./css/App.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
//Components
import Header from "./components/Header";
import Card from "./components/Card";
import DatePicker from "react-datepicker";
import Footer from "./components/Footer";

const App = () => {
  const [nasa, setNasa] = useState({
    loading: true,
    date: new Date(),
    error: false
  });

  const formattedDate = date => date.toISOString().slice(0, 10);

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
          error: false
        });
      })
      .catch(() => setNasa({ ...nasa, loading: false, error: true }));
  };

  const handleDateChange = date =>
    setNasa({ ...nasa, date: new Date(date), loading: true });

  useEffect(() => {
    getNasaData();
  }, [nasa.date]);

  console.log(nasa.error);
  return (
    <div className="App">
      <Header />

      <section className="content">
        <div className="date-picker">
          Go to this date:{" "}
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={nasa.date}
            onChange={handleDateChange}
          />
        </div>
        {nasa.loading ? (
          <div className="spinner"></div>
        ) : nasa.error ? (
          <div className="error">
            Opps. There is an error fetching the data you requested. Check the
            date you picked!
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
