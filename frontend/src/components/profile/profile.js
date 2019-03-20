import React from 'react';
import RoomBox from '../rooms/room_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        }
    }
    
    componentWillMount() {
        this.props.fetchUserRooms(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ rooms: newState.rooms });
    }   
    
    render() {
        if (this.state.rooms.length === 0) {
          return (<div>This user has no Rooms</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Rooms</h2>
              {this.state.rooms.map(room => (
                <RoomBox key={room._id} text={room.text} />
              ))}
            </div>
          );
        }
      }
}

export default Profile;
