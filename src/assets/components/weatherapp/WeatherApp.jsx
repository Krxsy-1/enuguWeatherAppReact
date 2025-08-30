import React, { useEffect, useState } from 'react';
import '../../../App.css'

function WeatherApp() {
    const[weather, setWeather] = useState(null);
    const[error, setError] =useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Enugu&appid=5aede8faa236c6730b504520d2505d23&units=metric");
                const result = await response.json();
                if (!response.ok || result.cod !== 200) {
                    throw new Error(result.message || "Failed to fetch weather data");
                }
                setWeather(result);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return (<div style={{color: 'red'}}>Error: {error}</div>);
    }

    return (
        <div>
            {weather ? (
                <div className="weather-container">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default WeatherApp