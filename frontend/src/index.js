import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { getSession, storeSession } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    
    store = configureStore(preloadedState);
    
    const currentTime = Date.now() / 1000;
    
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }
  window.getState = store.getState;
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store} />, root);

  //test
  // window.getState = store.getState;
  // window.x = () => Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);
  // window.storeSession = storeSession;
  // window.getSession = getSession;

});