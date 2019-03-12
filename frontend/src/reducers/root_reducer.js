import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import rooms from './rooms_reducer';
import timers from './timers_reducer';
import ui from './ui_reducer';
import users from './users_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  users,
  rooms,
  timers,
  ui

});

export default RootReducer;