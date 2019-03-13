import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';
import Rooms from './rooms';
import {fetchTimers} from '../../actions/timer_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    timers: Object.values(state.timers.all),
    rooms: Object.values(state.rooms.all),
    recent: state.timers.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: () => dispatch(fetchRooms()),
    fetchTimers: () => dispatch(fetchTimers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
