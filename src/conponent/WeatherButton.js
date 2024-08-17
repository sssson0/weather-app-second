import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='weather-button'>
          <Button variant="warning">현재위치</Button>
          <Button variant="warning">파리</Button>
          <Button variant="warning">뉴옥</Button>
    </div>
  );
}

export default WeatherButton;
