import React from 'react';
import { withRouter } from 'react-router-dom';
import './rooms.scss'
import Chat from '../chat/chat'
import NavBarContainer from '../nav/navbar_container';
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

  componentDidMount(){

  }
  
  componentDidUpdate(prevProps){
    if (prevProps.timers.length !== this.props.timers.length){
      this.props.fetchTimers();

    }
    if(!prevProps.users.handle){
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
      return l > r ? 1: l < r ? -1 :0;
    }).slice(0, 10).map((timer, idx) => {
      return(
        <tr key = {timer._id}>
          <td id="td">
            {idx+1}
          </td>
          <TimerItems  timer={timer}/> 
        </tr>
      )
    })


    if (this.state.rooms.length === 0) {
      return (<div>There are no Rooms</div>)
    } else {
      return (
        <div className = "room-index-page">
          <NavBarContainer/>
          <div className = "room-index-page-2">
          <div className = 'room-index-table'>
          <div className = "tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th id='th'>RANK</th>
                  <th id='th'>USERNAME</th>
                  <th id='th'>HI-SCORE</th>
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
              <Link className="start-button" to={'/single_player'}><span>Play</span></Link>
              <button className="log-out-btn" onClick={this.logoutUser}><span>Logout</span></button>
        </div>
        <div>
          <Chat users={this.props.users} />
        </div>
        </div>
        </div>
      );
    }
  }
}

export default withRouter(Room);
