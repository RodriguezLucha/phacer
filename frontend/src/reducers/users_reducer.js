import { RECEIVE_USER_HANDLE} from '../actions/session_actions';
  
  const UsersReducer = (state = { }, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_USER_HANDLE:
        return action.userInfo;
      default:
        return state;
    }
  };
  
  export default UsersReducer;