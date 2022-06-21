import React, { useState } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  

const url =`https://api.weatherapi.com/v1/current.json?key=6171b654af8b4afc98c45827222106&q=${location}`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}


  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
      {data.location && data.current != undefined &&
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.location.name}</p>
          </div>
          <div className="temp">
            <h1>{data.current.temp_f}°F</h1>
          </div>
          <div className="description">
            <p>{data.current.condition.text}</p>
          </div>
        </div>

          <div className="bottom">
            <div className="feels">
              <p>{data.current.feelslike_f}°F</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p>{data.current.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p>{data.current.wind_mph}mph</p>
              <p>Wind</p>
            </div>
          </div>
      </div>
      }
    </div>
  );
}

export default App;
