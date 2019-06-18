import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPageContainer from './main/main_page_container';
import RoomsContainer from './rooms/rooms_container';
import Modal from './modal/modal';
import TimerContainer from '../../src/components/Timer/timer_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <ProtectedRoute exact path="/single_player" component={TimerContainer} />
      <ProtectedRoute exact path="/rooms" component={RoomsContainer} />
    </Switch>
    <Modal />
  </div>
);

export default App;