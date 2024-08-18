import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,handleCityChange}) => {

  return (
    <div className='weather-button'>
          <Button 
           variant={`${setCity == null ? "outline-warning" : "success"}`}
           onClick={() => handleCityChange()}
          >
            현재위치</Button>

          {cities.map((item,index) => (
        <Button
        variant={`${setCity == item ? "outline-warning" : "success"}`}
          key={index}
          onClick={()=>setCity(item)}
          >{item} </Button>
      ))}
    </div>
  );
}

export default WeatherButton;
