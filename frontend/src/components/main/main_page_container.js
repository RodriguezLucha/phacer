import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import MainPage from './main_page';


const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => {
    return{
        openModal: modal => dispatch(openModal(modal))

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);

