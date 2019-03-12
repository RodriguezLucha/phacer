import React from 'react';
import { withRouter } from 'react-router-dom';
import RoomBox from './room_box';
import './rooms.scss'
import Chat from '../chat/chat'
import NavBarContainer from '../nav/navbar_container';
import { Link } from 'react-router-dom'


class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    }
  }

  componentWillMount() {
    this.props.fetchRooms();
  }

  componentWillReceiveProps(newState) {
    this.setState({ rooms: newState.rooms });
  }

  render() {
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
          <Chat />
        </div>
        </div>
        </div>
      );
    }
  }
}

export default withRouter(Room);
