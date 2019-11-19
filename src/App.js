import React, { useState, useEffect } from "react";
import "./css/App.css";
import axios from "axios";
//Components
import Card from "./components/Card";
import Header from "./components/Header";
/*
date: "2019-11-18"
explanation: "What would it look like to pass asteroid Arrokoth? The robotic New Horizons spacecraft zoomed past Arrokoth in January, 3.5 years after the spacecraft passed Pluto.  If this object's name doesn't sound familiar, that may be because the distant, double-lobed, Kuiper-belt object was unofficially dubbed Ultima Thule until recently receiving its official name: 486958 Arrokoth.  The featured black and white video animates images of Arrokoth taken by New Horizons at different angles as it zoomed by.  The video clearly shows Arrokoth's two lobes, and even hints that the larger lobe is significantly flattened.  New Horizons found that Arrokoth is different from any known asteroid in the inner Solar System and is likely composed of two joined planetesimals -- the building blocks of planets as they existed billions of years ago. New Horizons continues to speed out of our Solar System gaining about three additional Earth-Sun separations every year."
media_type: "video"
service_version: "v1"
title: "Passing Asteroid Arrokoth"
url: "https://www.youtube.com/embed/_IQBSZsqjkU?rel=0"


copyright: "Mauricio Salazar"
date: "2019-11-19"
explanation: "Can a lighthouse illuminate a galaxy? No, but in the featured image, gaps in light emanating from the Jose Ignacio Lighthouse in Uruguay appear to match up nicely, although only momentarily and coincidently, with dark dust lanes of our Milky Way Galaxy. The bright dot on the right is the planet Jupiter.  The central band of the Milky Way Galaxy is actually the central spiral disk seen from within the disk. The Milky Way band is not easily visible through city lights but can be quite spectacular to see in dark skies.  The featured picture is actually the addition of ten consecutive images taken by the same camera from the same location.  The images were well planned to exclude direct light from the famous lighthouse."
hdurl: "https://apod.nasa.gov/apod/image/1911/LighthouseMilkyWay_Salazar_3892.jpg"
media_type: "image"
service_version: "v1"
title: "Milky Way over Uruguayan Lighthouse"
url: "https://apod.nasa.gov/apod/image/1911/LighthouseMilkyWay_Salazar_960.jpg"

*/

function App() {
  const [nasa, setNasa] = useState({ loading: true });

  const apiKey = "nRNhFy0BNk1c1UcEHRkYR41KDaQLS8JaOLfCukR8";

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  const getNasaData = () => {
    axios
      .get(apiUrl)
      .then(response => {
        setNasa({ response: response.data, loading: false });
      })
      .catch(error => console.log(error));
  };

  useEffect(getNasaData, []);
  useEffect(() => {}, [nasa.loading]);

  console.log("nasa", nasa);
  return (
    <div className="App">
      <Header />
      <section className="content">
        {nasa.loading ? (
          <div className="spinner"></div>
        ) : (
          <Card nasa={nasa.response} />
        )}
      </section>
    </div>
  );
}

export default App;
