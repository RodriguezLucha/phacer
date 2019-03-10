import React from 'react';
import RoomBox from './room_box';

class RoomCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
          newRoom: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newRoom: nextProps.newRoom.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let room = {
      text: this.state.text
    };

    this.props.composeRoom(room); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="Write your room..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <RoomBox text={this.state.newRoom} />
        </div>
    )
  }
}

export default RoomCompose;
