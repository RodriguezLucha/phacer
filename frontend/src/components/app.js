import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPageContainer from './main/main_page_container';
import RoomsContainer from './rooms/rooms_container';
// import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import SinglePlayerContainer from './single_player/single_player_container';
import ProfileContainer from './profile/profile_container';
import RoomComposeContainer from './rooms/room_compose_container';
import Modal from './modal/modal';
import TimerContainer from '../../src/components/Timer/timer_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <ProtectedRoute exact path="/single_player" component={TimerContainer} />
      <ProtectedRoute exact path="/rooms" component={RoomsContainer} />
      <ProtectedRoute exact path="/rooms/scores" component={RoomsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_room" component={RoomComposeContainer} />
    </Switch>
  </div>
);

export default App;