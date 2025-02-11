import axios from 'axios';

const BASE_URL = 'https://v2.jokeapi.dev/';
axios.defaults.baseURL = BASE_URL;

export {
    BASE_URL
}