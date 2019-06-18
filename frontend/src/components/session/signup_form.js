import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors})
  }

  componentWillUnmount() {
    console.log("Clear session errors in unmount");
    this.props.clearSessionErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
          <div className="login-all-input-group">
              <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  className="signup-input"
                />
              <br/>
                <input type="text"
                  value={this.state.handle}
                  onChange={this.update('handle')}
                  placeholder="Username"
                  className="signup-input"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className="signup-input"
                />
              <br/>
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                  className="signup-input"  
                />
              <br />
              <div className="errors">
                {this.renderErrors()}
              </div>

            <div className="loing-form-submit-group">
              <div >
                <input type="submit" value="Sign up" className="login-submit-button"/>
              </div>
                <div>

                  {this.props.loginForm}
                </div>
              </div>
              
            </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);