const BASE_URL = 'https://api.nasa.gov/';
const API_KEY = '8oLwOODoLwR4nTpnYWZAwYhqAJP2EgPmFBFhn3qT'

function getApod() {
    return fetch(`${BASE_URL}planetary/apod?api_key=${API_KEY}`).then(res => res.json());
}

function getAlbums() {
    return fetch(`${BASE_URL}planetary/apod?start_date=2020-01-01&end_date=2020-12-31&api_key=${API_KEY}`).then(res => res.json());
}

export{
    getApod,
    getAlbums
}