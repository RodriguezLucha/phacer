import axios from 'axios';

export const getUserTimers = id => {
    return axios.get(`/api/times/user/${id}`)
};

export const postTimer = data => {
    return axios.post('/api/timers/', data)
};