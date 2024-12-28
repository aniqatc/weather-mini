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
const { fetchSavedLocation, fetchByCity } = weatherService;

function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const savedLocation = fetchSavedLocation();
        fetchByCity(savedLocation).then((data) => {
            setWeather(data);
            setLoading(false);
        }).catch(error => {
            setError(error.message);
            setLoading(false);
        })
    }, []);

    if (loading) return <LoadingCard />;
    if (error) return <ErrorCard error={error}></ErrorCard>;

    if (weather) return (
        <div className="container">
            <div className="animate-up delay-1">
                <Search/>
            </div>

            <div className="animate-up delay-2">
                <CurrentForecastCard weather={weather}/>
            </div>

            <div className="animate-up delay-3">
                <CurrentDetailsCard details={weather} />
            </div>

            <div className="animate-up delay-4">
                <WeeklyForecastCard forecast={[
                    { day: "Wed", temp: "75", icon: "bi-cloud-lightning" },
                    { day: "Thurs", temp: "67", icon: "bi-brightness-alt-high" },
                    { day: "Fri", temp: "78", icon: "bi-cloud-drizzle" },
                    { day: "Sat", temp: "74", icon: "bi-lightning" },
                    { day: "Sun", temp: "80", icon: "bi-cloud-sun" },
                ]}/>
            </div>

            <div className="animate-up delay-5">
                <Footer/>
            </div>
        </div>
    );
}

export default App;