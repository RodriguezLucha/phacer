import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';
import {currentUser} from '../../actions/session_actions';
import Rooms from './rooms';

const mapStateToProps = (state) => {
  return {
    rooms: Object.values(state.rooms.all),
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: () => dispatch(fetchRooms()),
    getCurrentUserHandle: () => dispatch(currentUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
