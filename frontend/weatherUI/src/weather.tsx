import React, { useState, useEffect } from 'react';
import CloudBoltSVG from "./svg/cloud-bolt-svgrepo-com.svg";
import CloudRainAltSVG from "./svg/cloud-rain-alt-svgrepo-com.svg";
import CloudSunAltSVG from "./svg/cloud-sun-alt-svgrepo-com.svg";
import CloudsSVG from "./svg/clouds-svgrepo-com.svg";
import SnowAltSVG from "./svg/snow-alt-svgrepo-com.svg";

interface WeatherData {
  temperature: number;
  weatherDescription: string;
  uvIndex: number;
}

type WeatherCondition = 'Thunderstorm' | 'Rain' | 'Clear' | 'Clouds' | 'Snow';

function mapWeatherDescriptionToCondition(description: string): WeatherCondition {
  switch (description.toLowerCase()) {
    case 'thunderstorm':
      return 'Thunderstorm';
    case 'rain':
      return 'Rain';
    case 'clear':
      return 'Clear';
    case 'clouds':
      return 'Clouds';
    case 'snow':
      return 'Snow';
    default:
      return 'Clouds'; 
  }
}

function WeatherIcon({ condition }: { condition: WeatherCondition }) {
  let svgSrc;
  
  switch (condition) {
    case 'Thunderstorm':
      svgSrc = CloudBoltSVG;
      break;
    case 'Rain':
      svgSrc = CloudRainAltSVG;
      break;
    case 'Clear':
      svgSrc = CloudSunAltSVG;
      break;
    case 'Clouds':
      svgSrc = CloudsSVG;
      break;
    case 'Snow':
      svgSrc = SnowAltSVG;
      break;
    default:
      svgSrc = CloudsSVG; 
      break;
  }

  return <img src={svgSrc} alt={condition} width="300" height="300" />;
}

const TemperatureDisplay: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 0,
    weatherDescription: '', 
    uvIndex: 0,
  });

  useEffect(() => {
    async function fetchWeatherData() {
    
      const apiWeatherDescription = 'clear'; 

      const mappedCondition = mapWeatherDescriptionToCondition(apiWeatherDescription);

     
      const data = {
        current: { temperature_2m: 75 },
        daily: { uv_index_max: [5] }
      };

      setWeatherData({
        temperature: data.current.temperature_2m,
        weatherDescription: mappedCondition,
        uvIndex: data.daily.uv_index_max[0],
      });
    }

    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 60000); 

  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="temperature-display">
      <WeatherIcon condition={weatherData.weatherDescription as WeatherCondition} />
      <p>The current temperature is: {weatherData.temperature}°F</p>
      <p>Weather Condition: {weatherData.weatherDescription}</p>
      <p>UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;
