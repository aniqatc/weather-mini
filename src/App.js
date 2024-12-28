import React, { useState, useEffect } from 'react';

import './App.css';
import Search from "./components/Search";
import CurrentForecastCard from "./components/CurrentForecastCard";
import CurrentDetailsCard from "./components/CurrentDetailsCard";
import WeeklyForecastCard from "./components/WeeklyForecastCard";
import Footer from "./components/Footer";
import ErrorCard from "./components/ErrorCard";
import LoadingCard from "./components/LoadingCard";
import weatherService from "./data/weatherService";
const { fetchSavedLocation, fetchSavedUnit, fetchByCity, updateSavedLocation, updateSavedUnit, fetchForecast } = weatherService;

function App() {
    const [city, setCity] = useState(fetchSavedLocation());
    const [unit, setUnit] = useState(fetchSavedUnit());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    function handleSearch(searchedCity) {
        setCity(searchedCity);
    }

    function handleUnit() {
        if (unit === 'imperial') {
            setUnit('metric');
            updateSavedUnit('metric');
        } else {
            setUnit('imperial');
            updateSavedUnit('imperial');
        }
    }

    useEffect(() => {
        fetchByCity(city, unit).then((data) => {
            setWeather(data);
            setError(null);
            setLoading(false);
            updateSavedLocation(city);

            // Save 5-day forecast
            fetchForecast(data.coord.lat, data.coord.lon, unit).then((forecastData) => {
                setForecast(forecastData);
            });
        }).catch(error => {
            setError(error);
            setLoading(false);
        })
    }, [city, unit]);

    return (
        <div className="container">
            <div className="animate-up delay-1">
                <Search onSearch={handleSearch} unit={unit}/>
            </div>

            {loading && <LoadingCard className="animate-up delay-2" />}
            {error && <ErrorCard className="animate-up delay-2" error={error} />}
            {!loading && !error && weather && (
                <>
                    <div className="animate-up delay-2">
                        <CurrentForecastCard weather={weather} unit={unit} />
                    </div>

                    <div className="animate-up delay-3">
                        <CurrentDetailsCard details={weather} unit={unit} />
                    </div>

                    <div className="animate-up delay-4">
                        <WeeklyForecastCard forecast={forecast} unit={unit} />
                    </div>
                </>
            )}

            <div className="animate-up delay-5">
                <Footer onUnitChange={handleUnit} />
            </div>
        </div>
    );
}

export default App;