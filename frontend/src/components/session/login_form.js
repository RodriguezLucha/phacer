import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
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

    this.props.login(user).then(this.props.closeModal); 
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="Log in" />
            <br /> 
            {this.props.signupForm}
            <br />
            <input type="submit"
              value="Demo Login"
              onClick={this.handleDemoLogin}
            />

            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);