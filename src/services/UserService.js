import { setToken, getUserFromToken, removeToken } from './TokenService';

const BASE_URL = 'https://nasagram-back.herokuapp.com/api/users';


function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();

        throw new Error('credentials already taken');
    }).then(data => setToken(data.token))

}

function login(credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();

        throw new Error('credentials already taken');
    }).then(data => setToken(data.token))
    
}

function logout() {
    removeToken();
}

function getUser() {
    return getUserFromToken();  
}



export {
    signup,
    login,
    logout,
    getUser
};