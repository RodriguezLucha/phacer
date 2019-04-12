import React from 'react';
import { withRouter } from 'react-router-dom';
import './rooms.scss'
import '../nav/navbar.scss';
import Chat from '../chat/chat'
import TimerItems from '../Timer/timer_items';
import { Link } from 'react-router-dom'


class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      users: props.users
    }
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
    if (prevProps.timers.length !== this.props.timers.length) {
      this.props.fetchTimers();
    }
    if (!prevProps.users.handle) {
      this.props.getCurrentUserHandle();
    }
  }

  componentWillMount() {
    // debugger
    this.props.fetchTimers();
    this.props.fetchRooms();
    this.props.getCurrentUserHandle();
  }

  componentWillReceiveProps(newState) {
    this.setState({ rooms: newState.rooms });
    this.setState({ users: newState.users });
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    let timerItems = this.props.timers.sort((a, b) => {
      const l = a.intTime;
      const r = b.intTime;
      return l > r ? 1 : l < r ? -1 : 0;
    }).slice(0, 10).map((timer, idx) => {
      return (
        <tr key={timer._id}>
          <td id="td-r">
            {idx + 1}
          </td>
          <TimerItems timer={timer} key={timer.id} />
        </tr>
      )
    })


      return (
        <div className="room-index-page">
          <div>
            < h1 id = "nav-title">Phacer</h1>
          </div>
          <div className="room-index-page-2">
            <div className='room-index-table'>
              <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th id='th-r'>RANK</th>
                      <th id='th-r'>USERNAME</th>
                      <th id='th-r'>HI-SCORE</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    {timerItems}
                  </tbody>
                </table>
              </div>
            </div >
            <div className="start-wrapper">
              <div>
                <Link className = "start-button" to={'/single_player'}><span>Play</span></Link>
              </div>
            <div>
              <button className="log-out-btn" onClick={this.logoutUser}><span>Logout</span></button>
            </div>
            <div className="instructions">
              <h3 className="instruct-text"> HOW TO PLAY</h3> <br></br>
              <img id="arrow_keys" src="instruct-3-1.png" alt="instructions"/>
              <div>

                <span className="instruct-text"> TURN </span> <span className="instruct-text">  ACCEL</span>

              </div>
            </div >
          </div>
          <div>
            <Chat users={this.props.users} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default withRouter(Room);
