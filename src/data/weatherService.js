import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY || "b400ae3b711a616262d18b0ca2cbe78f";
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const BASE_UNIT = "imperial";

const weatherService = {
    async fetchByCity(city) {
        try {
            const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${BASE_UNIT}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async fetchByGeolocation(lat, lon) {
        try {
            const response = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${BASE_UNIT}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async fetchForecast(lat, lon) {
        try {
            const response = await axios.get(`${BASE_URL}/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=${BASE_UNIT}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    fetchSavedLocation() {
        const location = localStorage.getItem('location');
        return location ? location : 'New York City'; // default city
    },

    updateSavedLocation(city) {
        if (city) {
            localStorage.setItem('location', city);
        }
    }
}

export default weatherService;