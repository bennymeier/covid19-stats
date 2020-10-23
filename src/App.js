import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [overall, setOverall] = useState(null);
  useEffect(async () => {
    const data = await fetch(
      "https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2020-10-22/2020-10-22"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    if (jsonData.countries) {
      setCountries(jsonData.countries);
    }
    if (jsonData.scale) {
      setOverall(jsonData.scale);
    }
  }, []);
  return (
    <div className="App">
      <h1>Covid 19 Stats</h1>
      <div>
        <div>
          <ul>
            {countries.map((country) => {
              return <li key={country}>{country}</li>;
            })}
          </ul>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
