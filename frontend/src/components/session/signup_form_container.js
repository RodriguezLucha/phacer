import React from "react";
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {

  // debugger 
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    loginForm: (
      <button  className="signup-login-button" onClick={() => dispatch(openModal("login"))}>Log in</button>
    ),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);