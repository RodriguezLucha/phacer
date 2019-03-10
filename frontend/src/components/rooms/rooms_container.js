import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';
import Rooms from './rooms';

const mapStateToProps = (state) => {
  return {
    rooms: Object.values(state.rooms.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: () => dispatch(fetchRooms())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
