import { connect } from 'react-redux';

import SinglePlayer from './single_player';

const mapStateToProps = state => ({
  someState: 4
});

export default connect(mapStateToProps)(SinglePlayer);