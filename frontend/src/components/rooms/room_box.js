import React from 'react';

class RoomBox extends React.Component {
  render() {
    return (
        <div>
            <tr>
              <td>{this.props.text}</td>
            </tr>
        </div>
    );
  }
}

export default RoomBox;
