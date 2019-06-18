import React from "react";
import { connect } from 'react-redux';
import { login, } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  // debugger
  return {
    currentUser: state.session.user,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signupForm: (
      <button className='login-submit-button' onClick={()=>dispatch(openModal('signup'))} >Sign up</button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
