import axios from 'axios';

const API_KEY = 'ffc3b44bdf3c57969980706003b78043';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
