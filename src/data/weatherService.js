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
            const response = await axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&cnt=40&appid=${API_KEY}&units=${unit}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Saved as JSON ({ city } or { lat, lon }). Older versions saved a plain
    // city name, which still loads.
    fetchSavedLocation() {
        const saved = localStorage.getItem('location');
        if (!saved) return { city: 'New York City' };
        try {
            const location = JSON.parse(saved);
            if (location && (location.city || (location.lat != null && location.lon != null))) {
                return location;
            }
        } catch (error) {
            // not JSON: a city name saved by an older version
        }
        return { city: saved };
    },

    fetchSavedUnit() {
        const unit = localStorage.getItem('unit');
        return unit ? unit : 'imperial';
    },

    updateSavedLocation(location) {
        if (location) {
            localStorage.setItem('location', JSON.stringify(location));
        }
    },

    updateSavedUnit(unit) {
        if (unit) {
            localStorage.setItem('unit', unit);
        }
    }
}

export default weatherService;