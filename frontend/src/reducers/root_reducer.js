import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import rooms from './rooms_reducer';
import timers from './timers_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  rooms,
  timers
});

export default RootReducer;