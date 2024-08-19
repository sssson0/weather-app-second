import React from 'react';

function WeatherBox({weather}) {
    console.log(weather)
    const FF = weather?.main.temp * 9/5 + 32
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp} °C / {FF.toFixed(1)}°F</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  );
}

export default WeatherBox;
