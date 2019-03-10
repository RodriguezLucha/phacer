import { connect } from 'react-redux';
import { composeRoom } from '../../actions/room_actions';
import RoomCompose from './room_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newRoom: state.rooms.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeRoom: data => dispatch(composeRoom(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomCompose);
