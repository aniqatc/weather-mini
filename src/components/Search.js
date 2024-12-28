import React, { useState } from "react";
import weatherService from "../data/weatherService";

const { fetchByGeolocation } = weatherService;

function Search({ onSearch, unit }) {
    const [city, setCity] = useState("");

    function handleSearch(event) {
        event.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity("");
        }
    }

    function handleGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                fetchByGeolocation(coords.latitude, coords.longitude, unit).then(data => onSearch(data.name));
            });
        }
    }

    return (
        <form className="input-group mb-3 border border-light-subtle rounded-4 shadow-sm" onSubmit={handleSearch}>
            <button
                className="btn btn-outline-secondary border border-light-subtle rounded-start-4"
                type="button"
                aria-label="Get current location"
                onClick={handleGeolocation}
            >
                <i className="bi bi-geo-alt"></i>
            </button>
            <input
                type="text"
                className="form-control border-0"
                placeholder="Enter city name..."
                aria-label="City search"
                aria-describedby="search-button"
                autoComplete="off"
                style={{ fontFamily: "inherit" }}
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <button
                className="btn btn-outline-secondary border border-light-subtle rounded-end-4"
                type="submit"
            >
                <i className="bi bi-search"></i>
            </button>
        </form>
    );
}

export default Search;