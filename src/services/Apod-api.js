const BASE_URL = 'https://api.nasa.gov/';

export function getApod() {
    return fetch(BASE_URL + 'planetary/apod?api_key=8oLwOODoLwR4nTpnYWZAwYhqAJP2EgPmFBFhn3qT').then(res => res.json());
}