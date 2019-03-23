import { getTimers, getUserTimers, postTimer } from '../util/timer_api_util';
import CryptoJS from 'crypto-js';

export const RECEIVE_TIMERS = "RECEIVE_TIMERS";
export const RECEIVE_USER_TIMERS = "RECEIVE_USER_TIMERS";
export const RECEIVE_NEW_TIMER = "RECEIVE_NEW_TIMER";

export const receiveTimers = timers => ({
  type: RECEIVE_TIMERS,
  timers
});

export const receiveUserTimers = timers => ({
  type: RECEIVE_USER_TIMERS,
  timers
});

export const receiveNewTimer = timer => ({
  type: RECEIVE_NEW_TIMER,
  timer
});

export const fetchTimers = () => dispatch => (
  getTimers()
    .then(timers => dispatch(receiveTimers(timers)))
    .catch(err => console.log(err))
);

export const fetchUserTimers = id => dispatch => (
  getUserTimers(id)
    .then(timers => dispatch(receiveUserTimers(timers)))
    .catch(err => console.log(err))
);

export const recordTimer = (data, id) => dispatch => {
  let stringifiedData = JSON.stringify(data);
  
  let encrypted = CryptoJS.AES.encrypt(stringifiedData, id);

  return postTimer({"encrypted" : encrypted.toString()})
    .then(timer => dispatch(receiveNewTimer(timer)))
    .catch(err => console.log(err))
};
