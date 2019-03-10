import { connect } from 'react-redux';
import { fetchUserRooms } from '../../actions/room_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    rooms: Object.values(state.rooms.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserRooms: id => dispatch(fetchUserRooms(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
