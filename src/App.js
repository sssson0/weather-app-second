
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState} from 'react';
import WeatherBox from './conponent/WeatherBox';
import WeatherButton from './conponent/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState("")
  const cities =["Paris","new york",'seoul']
  const [loading,setLoading] = useState(false)
  const [apiError, setAPIError] = useState("");

  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
    })
  }

  const getWeatherByCurrentLocation = async(lat,lon)=>{
    try {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e3a66dfd9ed8867edcb4ca5079a2ef5&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data)
    setLoading(false)
    }catch(err){
      setAPIError(err.message);
      setLoading(false);
    }
  }

  const getWeatherByCity = async()=>{
    try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e3a66dfd9ed8867edcb4ca5079a2ef5&units=metric`;
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data)
    setLoading(false)
    }catch(err){
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
    
  }
      
  useEffect(()=>{
    if(city==""){
      getCurrentLocation()
    }else{
      getWeatherByCity()
    }
  },[city])
  // useEffect(()=>{
  //   getCurrentLocation()
  // },[])

  // useEffect(()=>{
  //     getWeatherByCity()
  // },[city])

  const handleCityChange = () => {
    window.location.reload();
  };

  return (
    <div>
       {/* 로딩중일떈 weatherBox안보이게  */}
      {loading?(<div className='container'><ClipLoader color="#f86c6b" size={150} loading={loading}/></div>)
      :(<div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities ={cities} handleCityChange={handleCityChange} setCity={setCity}/>
      
      </div>)}
    </div>
  );
}

export default App;
