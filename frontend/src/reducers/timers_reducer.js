import { RECEIVE_TIMERS, RECEIVE_USER_TIMERS, RECEIVE_NEW_TIMER } from '../actions/timer_actions';
  
  const TimersReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TIMERS:
        newState.all = action.timers.data;
        return newState;
      case RECEIVE_USER_TIMERS:
        newState.user = action.timers.data;
        return newState;
      case RECEIVE_NEW_TIMER:
        newState.new = action.timer.data;
        newState.all.unshift(newState.new);
        return newState;
      default:
        return state;
    }
  };
  
  export default TimersReducer;