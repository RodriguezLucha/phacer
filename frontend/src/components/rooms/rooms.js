import React from 'react';
import { withRouter } from 'react-router-dom';
import RoomBox from './room_box';

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
        <div className="table-container">
          <table >
              <tr>
                <th className="header">All Rooms</th>
              </tr>
              <tr>
                <td>
                {this.state.rooms.map(room => (
                  <RoomBox key={room._id} text={room.text} />
                  ))}
                </td>
              </tr>
          </table>
        </div>
      );
    }
  }
}

export default withRouter(Room);
