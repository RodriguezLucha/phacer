import axios from 'axios';

export const getRooms = () => {
  return axios.get('/api/rooms')
};

export const getUserRooms = id => {
  return axios.get(`/api/rooms/user/${id}`)
};

export const writeRoom = data => {
  return axios.post('/api/rooms/', data)
}