import React, { useEffect, useState } from 'react';
import '../../../index.css'

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
        <div className="min-h-screen flex justify-center items-center font-sans text-white"
        style={{
            backgroundImage: "url('clouds2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'no-repeat',
        }}
        >
            {weather ? (
                
                <div className="flex flex-col items-center gap-4">
                    <br/>
                    <div className="weather-container bg-white/20 rounded-3xl p-8 w-[350px] shadow-2xl backdrop-blur-lg text-center border border-white/30">
                        <h2 className="text-3xl font-bold mb-2 drop-shadow">{weather.name}</h2>
                        <p className="text-7xl font-thin mb-2 tracking-wide drop-shadow-lg">{weather.main.temp}°</p>
                        <p className="text-x1 mb-4 capitalize">{weather.weather[0].description}</p>
                        <span>H : {weather.main.temp_max}° </span>
                        <span>   L : {weather.main.temp_min}</span>
                        {/* <span>Humidity: {weather.main.humidity}%</span>
                        <span>Wind Speed: {weather.wind.speed} m/s</span> */}
                    </div>
                    <div className="weather-container bg-white/10 rounded-3xl p-3 w-[350px] shadow-xl backdrop-blur-lg text-left">
                        Rainy conditions expected around 3pm. Wind gusts are up to 20km/h.
                        <hr className="my-4"/>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-col items-center">
                                <span className="text-xs">Now</span>
                                <span className="text-2xl">⛅</span>
                                <span className="text-sm">30°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">3pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">30°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">4pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">29°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">5pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">29°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">6pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">28°</span>
                            </div>
                        </div>
                    </div>
                    <div className="weather-container bg-white/10 rounded-3xl p-3 w-[350px] shadow-xl backdrop-blur-lg text-left mt-2">
                        <span className="text-sm">
                            📝10-DAY FORECAST.
                        </span>
                        <hr className="my-4"/>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center justify-between">
                                <span>Today</span>
                                <span>☁️</span>
                                <span>23°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Tue</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">70%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Wed</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">85%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Thu</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">80%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Fri</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">55%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Sat</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">60%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Sun</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">65%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Mon</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">65%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Tue</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">70%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center justify-between">
                                <span>Wed</span>
                                <span className="flex flex-col items-center justify-center"><span className="text-2xl">🌧️</span><span className="text-xs">65%</span></span>
                                <span>22°</span>
                            </div>
                            <hr/>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-4 w-[350px]">
                        <div className="w-[168px] h-30 bg-white/30 rounded-xl flex flex-col items-left justify-center shadow-md p-2">
                            <span className="text-xs font-bold text-white-800">
                                AVERAGES
                            </span>
                            <p className="text-lg font-bold text-white-800">
                                +2°
                            </p>
                            <p className="text-xs text-white-800 items-left">
                                Above average daily high.
                            </p>
                            <div className="flex justify-between w-full text-xs mt-1">

                                <span>
                                    Today
                                </span>

                                <span>
                                    H:{weather.main.temp}°
                                </span>

                                <span>
                                    Average
                                </span>

                                <span>
                                    H:{weather.main.temp}°
                                </span>
                            </div>
                        </div>

                        <div className="w-[168px] h-30 bg-white/30 rounded-xl flex flex-col items-left justify-center shadow-md p-2">

                            <span className="text-xs font-bold text-white-800">
                                FEELS LIKE
                            </span>

                            <h2 className="text-lg font-bold text-white-800 items-left">
                                {weather.main.feels_like}°
                            </h2>

                            <p className="text-xs text-white-800 items-left">
                                It feels warmer than the actual temperature.
                            </p>
                        </div>
                    </div>

                    <div className="weather-container bg-white/10 rounded-3xl p-3 w-[350px] shadow-xl backdrop-blur-lg text-left mt-2">
                        <h2 className="text-xs font-bold text-white-800 mb-2">
                            WIND
                        </h2>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-row justify-between w-full">
                                <span className="text-xs text-white-700">Speed</span>
                                <span className="text-xs text-white-900 font-semibold">{weather.wind.speed} m/s</span>
                            </div>
                            <hr className="my-2 border-gray-300 w-full" />
                            <div className="flex flex-row justify-between w-full">
                                <span className="text-xs text-white-700">Gusts</span>
                                <span className="text-xs text-white-900 font-semibold">{weather.wind.gust || '--'} m/s</span>
                            </div>
                            <hr className="my-2 border-gray-300 w-full" />
                            <div className="flex flex-row justify-between w-full">
                                <span className="text-xs text-white-700">Direction</span>
                                <span className="text-xs text-white-900 font-semibold">{weather.wind.deg}°</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-4 w-[350px]">
                        <div className="w-[168px] h-30 bg-white/30 rounded-xl flex flex-col items-left justify-center shadow-md p-2">
                            <span className="text-xs font-bold text-white-700">
                                SUNRISE
                            </span>
                            <h2 className="text-lg font-bold text-white-800 items-left">
                                {weather.sys.sunrise}
                            </h2>
                            <br/>
                            <hr/>
                            <p className="text-xs text-white-800 items-left">
                                Sunset: {weather.sys.sunset}
                            </p>
                        </div>
                        <div className="w-[168px] h-30 bg-white/30 rounded-xl flex flex-col items-left justify-center shadow-md p-2">
                        <br/>
                            <span className="text-xs font-bold text-white-700">
                                HUMIDITY
                            </span>
                            <h2 className="text-lg font-bold text-white-800 items-left">
                                {weather.main.humidity}%
                            </h2>
                            <br/>
                            <hr/>
                            <p className="text-xs text-white-800 items-left">
                                The dew point is 22° right now.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default WeatherApp