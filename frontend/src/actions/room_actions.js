import { getRooms, getUserRooms, writeRoom, deleteUserRooms } from '../util/room_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_USER_ROOMS = "RECEIVE_USER_ROOMS";
export const RECEIVE_NEW_ROOM = "RECEIVE_NEW_ROOM";
export const DELETE_USER_ROOMS = "DELETE_USER_ROOMS";

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveUserRooms = rooms => ({
  type: RECEIVE_USER_ROOMS,
  rooms
});

export const receiveNewRoom = room => ({
  type: RECEIVE_NEW_ROOM,
  room
})

export const removeUserRooms = rooms => ({
  type: DELETE_USER_ROOMS,
  rooms
})

export const fetchRooms = () => dispatch => (
  getRooms()
    .then(rooms => dispatch(receiveRooms(rooms)))
    .catch(err => console.log(err))
);

export const fetchUserRooms = id => dispatch => (
  getUserRooms(id)
    .then(rooms => dispatch(receiveUserRooms(rooms)))
    .catch(err => console.log(err))
);

export const composeRoom = data => dispatch => (
  writeRoom(data)
    .then(room => dispatch(receiveNewRoom(room)))
    .catch(err => console.log(err))
);

export const destroyUserRooms = id => dispatch => (
  deleteUserRooms(id)
    .then(rooms => dispatch(removeUserRooms(rooms)))
    .catch(err => console.log(err))
)