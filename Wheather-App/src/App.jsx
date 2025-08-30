import { useState } from 'react'
import './App.css'

/* images */

import Search from "./assets/Search.png"
import Sun from "./assets/Sun.png";
import Wind1 from "./assets/Wind-1.png"
import Wind2 from "./assets/Wind2.png"
import Cloudrain from "./assets/Cloudrain.png"
import Cloudsun from "./assets/Cloudsun.png"
import Snow from "./assets/Snow.jpeg"


const WeatherDetail = ({ icon, temp, city, country, lat, log }) => {
  return (
    <>
      <div className='image'>
        <img src={icon} alt="img" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">
        {city}
      </div>
      <div className="country"> {country} </div>
      <div className="cord">
        <div>
          <span className="lat">latitude</span>
          <span> {lat} </span>
        </div>
        <div>
          <span className="log">longitude</span>
          <span> {log} </span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={Wind1} alt="wind" width={87} className='icon' />
          <div className="data">
            <div className="humidity-percent">%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={Wind2} alt="wind" width={87} className='icon' />
          <div className="data">
            <div className="humidity-percent">%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
      </div>
    </>
  )
};

function App() {
  const [icon, setIcoc] = useState(Snow)
  const [temp, setTemp] = useState(0)
  const [city, setCity] = useState("Madurai")
  const [country, setCountry] = useState("IN")
  const [lat, setLat] = useState(0)
  const [log, setLog] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="input-container">
          <input type="text" placeholder='Enter the city' className='cityinput' />
          <div className="search-icon">
            <img src={Search} alt="search" width={30} />
          </div>
        </div>
        <WeatherDetail icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} />
      </div>
    </>
  )
}

export default App
