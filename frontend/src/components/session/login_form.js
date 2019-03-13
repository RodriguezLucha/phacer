import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.props.history.push('/rooms');
    }

    this.setState({errors: nextProps.errors})
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
      password: this.state.password
    };
    this.props.login(user);
  //   .then(() => {
  //     this.props.closeModal(); 
  // });
  }


  handleDemoLogin(e) {
    // debugger
      e.preventDefault();
      const user = Object.assign({}, { email: 'guest@guest.com', password: "password" });

     this.props.login(user)
       .then(() => {
          this.props.closeModal();
      });

    }
    
   
    
    renderErrors() {
      // debugger
      return(
        <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }
  
  
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form-container">
          <div onClick={this.props.closeModal} className="close-x">
            <div className="x-test">
                <div >
                  X
                </div>
            </div>
            
          </div>
          <div className="login-all-input-group">
            <br />
            <div>

              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="login-input"
                />

            </div>
            <br />
            <div className="errors-margin">

              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="login-input"
              />
            </div>

            <div className="errors">
              {this.renderErrors()}
            </div>


            <br />

            <div className="loing-form-submit-group">

              <div>

                <input
                  type="submit"
                  value="Log in"
                  className="login-submit-button"
                />
              </div>

              <br />
              <div>

                <input
                  type="submit"
                  value="Demo Login"
                  onClick={this.handleDemoLogin}
                  className="login-submit-button"
                />
              </div>
            </div>

            <div className="login-signup-group">
              <div className="login-signup-button-title">
                Don't have an account ? 
              </div>
              <div className="login-signup-button">
                {this.props.signupForm}
              </div>

            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);