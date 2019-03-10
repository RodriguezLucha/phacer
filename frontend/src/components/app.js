import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import RoomsContainer from './rooms/rooms_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SinglePlayerContainer from './single_player_container';
import ProfileContainer from './profile/profile_container';
import RoomComposeContainer from './rooms/room_compose_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/single_player" component={SinglePlayerContainer} />

      <ProtectedRoute exact path="/rooms" component={RoomsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_room" component={RoomComposeContainer} />
    </Switch>
  </div>
);

export default App;