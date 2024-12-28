import React, {useState, useEffect} from 'react';

import './App.css';
import Search from "./components/Search";
import CurrentForecastCard from "./components/CurrentForecastCard";
import CurrentDetailsCard from "./components/CurrentDetailsCard";
import WeeklyForecastCard from "./components/WeeklyForecastCard";
import Footer from "./components/Footer";
import ErrorCard from "./components/ErrorCard";
import LoadingCard from "./components/LoadingCard";

import weatherService from "./data/weatherService";

const { fetchSavedLocation, fetchByCity, updateSavedLocation, fetchForecast } = weatherService;

function App() {
    const [city, setCity] = useState(fetchSavedLocation());
    const [unit, setUnit] = useState('imperial');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        fetchByCity(city, unit).then((data) => {
            setWeather(data);
            setError(null);
            setLoading(false);
            updateSavedLocation(city);
            console.log(data);

            // Save 5-day forecast
            fetchForecast(data.coord.lat, data.coord.lon, unit).then((forecastData) => {
                setForecast(forecastData);
                console.log(forecastData);
            });
        }).catch(error => {
            setError(error);
            setLoading(false);
            console.log(error);
        })
    }, [city, unit]);

    return (
        <div className="container">
            <div className="animate-up delay-1">
                <Search />
            </div>
            {error && <ErrorCard className="animate-up delay-2" error={error}></ErrorCard>}
            {loading && <LoadingCard className="animate-up delay-2" />}
            {weather && <>
                <div className="animate-up delay-2">
                    <CurrentForecastCard weather={weather}/>
                </div>

                <div className="animate-up delay-3">
                    <CurrentDetailsCard details={weather}/>
                </div>

                <div className="animate-up delay-4">
                    <WeeklyForecastCard forecast={forecast}/>
                </div>
            </>}

            <div className="animate-up delay-5">
                <Footer/>
            </div>
        </div>
    );
}

export default App;