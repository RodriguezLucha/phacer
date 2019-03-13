import React from 'react';

class RoomBox extends React.Component {
  render() {
    return (
      <table>
        <tbody>
            <tr>
              <td>{this.props.text}</td>
            </tr>
        </tbody>
        </table >
    );
  }
}

export default RoomBox;
