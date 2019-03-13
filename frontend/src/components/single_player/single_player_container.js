import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SinglePlayer from './single_player';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return({
      someState: 4,
      end: ownProps.end
  })
};

// const mapDispatchToProps = dispatch => ({
//   stopTimer: () => dispatch(Timer.stopTimer()),
//   startTimer: () => dispatch(Timer.startTimer())
// })

export default withRouter(connect(mapStateToProps)(SinglePlayer));