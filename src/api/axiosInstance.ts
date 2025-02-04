import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sky-scrapper.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
  }
});

export default axiosInstance;
