import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";


export default function WeatherApp () {
    const [weatherinfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 37.73,
        humidity: 70,
        temp: 31.05,
        tempMax: 31.05,
        tempMin: 31.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo} />
        </div>
    );
}