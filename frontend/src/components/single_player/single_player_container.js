import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SinglePlayer from './single_player';

const mapStateToProps = (state, ownProps) => {
  return({
      end: ownProps.end
  })
};

export default withRouter(connect(mapStateToProps)(SinglePlayer));