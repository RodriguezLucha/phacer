import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';
import {currentUser} from '../../actions/session_actions';
import Rooms from './rooms';
import {fetchTimers} from '../../actions/timer_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    timers: Object.values(state.timers.all),
    rooms: Object.values(state.rooms.all),
    recent: state.timers.new,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: () => dispatch(fetchRooms()),
    fetchTimers: () => dispatch(fetchTimers()),
    getCurrentUserHandle: () => dispatch(currentUser()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
