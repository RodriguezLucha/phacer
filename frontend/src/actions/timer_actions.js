import { getUserTimers, postTimer } from '../util/timer_api_util';

export const RECEIVE_USER_TIMERS = "RECEIVE_USER_TIMERS";
export const RECEIVE_NEW_TIMER = "RECEIVE_NEW_TIMER";


export const receiveUserTimers = timers => ({
  type: RECEIVE_USER_TIMERS,
  timers
});

export const receiveNewTimer = timer => ({
  type: RECEIVE_NEW_TIMER,
  timer
});

export const fetchUserTimers = id => dispatch => (
  getUserTimers(id)
    .then(timers => dispatch(receiveUserTimers(timers)))
    .catch(err => console.log(err))
);

export const recordTimer = data => dispatch => (
  postTimer(data)
    .then(timer => dispatch(receiveNewTimer(timer)))
    .catch(err => console.log(err))
);
