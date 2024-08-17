
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState} from 'react';
import WeatherBox from './conponent/WeatherBox';
import WeatherButton from './conponent/WeatherButton';


function App() {
  const [weather,setWeather] = useState(null);
  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
    })
  }

  const getWeatherByCurrentLocation = async(lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e3a66dfd9ed8867edcb4ca5079a2ef5&units=metric`
    // setLoading(true)
    let response = await fetch(url)
    let data = await response.json();
    // setLoading(false)
    setWeather(data)
  }
      

  useEffect(()=>{
    getCurrentLocation()
  },[])
  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton/>
      </div>
    </div>
  );
}

export default App;
