import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Score from './scores';


const msp = (state, ownProps) => {
    // debugger
    return({
        end: ownProps.end 

    })
}


export default withRouter(connect(msp)(Score))