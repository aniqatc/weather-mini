import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const weatherService = {
    async fetchByCity(city, unit) {
        try {
            const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${unit}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async fetchByGeolocation(lat, lon, unit) {
        try {
            const response = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async fetchForecast(lat, lon, unit) {
        try {
            const response = await axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=${unit}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    fetchSavedLocation() {
        const location = localStorage.getItem('location');
        return location ? location : 'New York City';
    },

    updateSavedLocation(city) {
        if (city) {
            localStorage.setItem('location', city);
        }
    }
}

export default weatherService;