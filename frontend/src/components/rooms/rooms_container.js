import { connect } from 'react-redux';
import {currentUser} from '../../actions/session_actions';
import Rooms from './rooms';
import {fetchTimers} from '../../actions/timer_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    timers: Object.values(state.timers.all),
    recent: state.timers.new,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTimers: () => dispatch(fetchTimers()),
    getCurrentUserHandle: () => dispatch(currentUser()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
