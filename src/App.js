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
const { fetchSavedLocation, fetchSavedUnit, fetchByCity, fetchByGeolocation, updateSavedLocation, updateSavedUnit, fetchForecast } = weatherService;

function App() {
    // A location is either { city } from the search box or { lat, lon } from "use my location".
    const [location, setLocation] = useState(fetchSavedLocation());
    const [unit, setUnit] = useState(fetchSavedUnit());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    function handleSearch(searchedCity) {
        setLocation({ city: searchedCity });
    }

    // Search by coordinates rather than the place's name, so a town that shares
    // its name with a bigger city still loads the right weather.
    function handleLocate(lat, lon) {
        setLocation({ lat, lon });
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
        setLoading(true);
        const request = location.city
            ? fetchByCity(location.city, unit)
            : fetchByGeolocation(location.lat, location.lon, unit);

        request
            .then((data) => {
                setWeather(data);
                setError(null);
                updateSavedLocation(location);

                return fetchForecast(data.coord.lat, data.coord.lon, unit);
            })
            .then((forecastData) => {
                setForecast(forecastData);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [location, unit]);

    return (
        <div className="container">
            <div className="animate-up delay-1">
                <Search onSearch={handleSearch} onLocate={handleLocate} />
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