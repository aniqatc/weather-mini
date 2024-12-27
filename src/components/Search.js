import React from "react";

function Search() {
    return (
        <div className="input-group mb-3 border border-light-subtle rounded-4 shadow-sm">
            <button
                className="btn btn-outline-secondary border border-light-subtle rounded-start-4"
                type="button"
                aria-label="Get current location"
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
            />
            <button
                className="btn btn-outline-secondary border border-light-subtle rounded-end-4"
                type="button"
            >
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default Search;