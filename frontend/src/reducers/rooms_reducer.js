import { RECEIVE_ROOMS, RECEIVE_USER_ROOMS, RECEIVE_NEW_ROOM, DELETE_USER_ROOMS } from '../actions/room_actions';
  
  const RoomsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_ROOMS:
        newState.all = action.rooms.data;
        return newState;
      case RECEIVE_USER_ROOMS:
        newState.user = action.rooms.data;
        return newState;
      case RECEIVE_NEW_ROOM:
        newState.new = action.room.data
        return newState;
      case DELETE_USER_ROOMS:
        delete newState.user[action.rooms]
        return newState
      default:
        return state;
    }
  };
  
  export default RoomsReducer;