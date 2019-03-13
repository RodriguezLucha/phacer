import React from 'react';
import { withRouter } from 'react-router-dom';
import RoomBox from './room_box';
import './rooms.scss'
import Chat from '../chat/chat'
import NavBarContainer from '../nav/navbar_container';
import TimerItems from '../Timer/timer_items';
import { Link } from 'react-router-dom'


class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    }
  }

  componentDidMount(){

  }
  
  componentDidUpdate(prevProps){
    if (prevProps.timers.length !== this.props.timers.length){
      this.props.fetchTimers();
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
  }

  render() {
    let timerItems = this.props.timers.sort((a, b) => {
      const l = a.intTime;
      const r = b.intTime;
      return l < r ? 1: l > r ? -1 :0;
    }).map(timer => {
      return(
        <div key = {timer._id}>
          <TimerItems  timer={timer}/> 
        </div>
      )
    })

    if (this.state.rooms.length === 0) {
      return (<div>There are no Rooms</div>)
    } else {
      return (
        <div className = "room-index-page">
          <NavBarContainer/>
          <h1>
            {/* <div>
            <TimerItems  timer={this.props.recent.endTime}/> 
            </div> */}
            {timerItems}
          </h1>
          <div className = "room-index-page-2">
          <div className = 'room-index-table'>
          <div className = "tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th id='th'>ROOMS</th>
                  <th id='th'>HOST</th>
                  <th id='th'>DESCRIPTION</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr> 
                  <td id='td'>
                  {this.state.rooms.map(room => (
                    <RoomBox key={room._id} text={room.text} />
                  ))}
                  </td>
                  <td id='td'>Ari </td>
                  <td id='td'> Testing a Room </td>
                </tr>
          </tbody>
          </table>
            </div>
        </div >
        <div className="start-wrapper">
              <Link className="start-button" to={'/single_player'}><span>
Play
</span></Link>
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
