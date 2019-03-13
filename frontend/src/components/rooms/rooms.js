import React from 'react';
import { withRouter } from 'react-router-dom';
import RoomBox from './room_box';
import './rooms.scss'
import Chat from '../chat/chat'
import NavBarContainer from '../nav/navbar_container';
import ScoreContainer from '../Timer/scores_container';
import TimerItems from '../Timer/timer_items';

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
  }

  componentWillReceiveProps(newState) {
    this.setState({ rooms: newState.rooms });
  }

  render() {
    let timerItems = this.props.timers.map(timer => {
      return(
        <div>
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
          <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th id='th'>ROOMS</th>
                  <th id='th'>HOST</th>
                  <th id='th'>DESCRIPTION</th>

                </tr>
              </thead>
            </table>
          </div>
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
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
        <div>
          <Chat />
        </div>
        </div>
        </div>
      );
    }
  }
}

export default withRouter(Room);
