import { connect } from 'react-redux';
import SinglePlayer from './single_player';
import Timer from './Timer/timer';

const mapStateToProps = state => ({
  someState: 4,
});

const mapDispatchToProps = dispatch => {
  return {
  startTimer: () => dispatch(Timer.startTimer()),
  // stopTimer: () => dispatch(Timer.stopTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer);