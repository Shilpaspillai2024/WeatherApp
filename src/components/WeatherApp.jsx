import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "036a51ad71d89b253205cb1629ec67ae";

  const handleWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
      );
      const data = await response.json();

      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  return (
  <div className="fixed inset-0 bg-gradient-to-br from-blue-200 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full text-white">
        <h1 className="text-4xl font-bold text-center mb-6">🌦️ Weather App</h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter city name"
            className="flex-1 px-4 py-2 rounded-md text-black shadow-inner focus:outline-none focus:ring-2 focus:ring-white"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={handleWeather}
            className="px-4 py-2 rounded-md bg-white text-blue-600 font-semibold hover:bg-gray-200 transition"
          >
            Search
          </button>
        </div>

        {weatherData && (
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-inner text-center">
            <h3 className="text-2xl font-bold mb-2">{weatherData.location.name}</h3>
            <p className="text-xl">{weatherData.current.temperature}&#176;C</p>
            <p className="italic">{weatherData.current.weather_descriptions[0]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
