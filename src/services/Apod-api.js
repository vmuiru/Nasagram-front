const BASE_URL = 'https://api.nasa.gov/';
const API_KEY = '8oLwOODoLwR4nTpnYWZAwYhqAJP2EgPmFBFhn3qT'

export function getApod() {
    return fetch(`${BASE_URL}planetary/apod?api_key=${API_KEY}`).then(res => res.json());
}