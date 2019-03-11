import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import Timer from '../Timer/timer'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
      this.props.history.push('/');
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/rooms'}>All Rooms</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_room'}>Create a Room</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
            {/* //     <button onClick={() => this.props.openModal('login')} >Login</button>
            //     <button onClick={() => this.props.openModal('signup')} >Signup</button> */}
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            {/* <h1>Phacer</h1> */}
            { this.getLinks() }
            <Timer/>
        </div>
      );
  }
}

export default NavBar;