import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getSession = (id) => {
  return axios.get('/api/session', {sesh: id});
};

export const storeSession = (id) => {
  return axios.post('/api/session/', {sesh: id});
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const currentUser = () => {
  return axios.get(`/api/users/current`);
};
