import React from "react";
import io from "socket.io-client";
import './chat.scss'

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.users.handle,
            message: '',
            messages: [{
                author: "Admin",
                message: "Press ← → to steer and ↑ to accelerate",
                timestamp: new Date().getTime()
            }],
        };
        let url = `${window.location.hostname}:${window.location.port}`;
        
        this.socket = io.connect(url);
        
    }
    componentDidMount() {
    
        this.socket.on('RECEIVE_MESSAGE', function (data) {
            data['timestamp'] = new Date().getTime();
            addMessage(data);
        });

        const addMessage = data => {
            this.setState({
                messages: [...this.state.messages, data]
            });
            if (this.refs && this.state.messages && this.state.messages.length > 0) {

                let messages = this.state.messages;
                let lastMessage = messages[messages.length - 1];

                if (lastMessage.timestamp) {
                    let lastTimestamp = lastMessage.timestamp;

                    if (this.refs[lastTimestamp]) {
                        this.refs[lastTimestamp].scrollIntoView({
                            block: 'end',
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        this.sendMessage = ev => {
          ev.preventDefault();
          if(this.state.message){
              this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
              })
              this.setState({
                message: ''
              });          }
        }
    }
    componentWillUnmount() {
        this.socket.disconnect();
    }

    componentWillReceiveProps(newState) {
        this.setState({username: this.props.users.handle});
    }

    messageClassification(authorName){
        return authorName === this.state.username ? "from-me" : "from-them";
    }

    keyPressed(event) {
      if (event.key === "Enter") {
        this.sendMessage(event);
      }
    }

    render() {
        return (
            <div className="chat-container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-title"> CHAT</div>
                            <div className="card-body">
                                <div className="messages">
                                    {   
                                        this.state.messages.map(m => {
                                        return (
                                            <section key={`${m.author}:${m.message}:${m.timestamp}`} ref={m.timestamp} id='chat-total'>
                                                <div className={this.messageClassification(m.author)}>{m.author}: {m.message}</div>
                                            </section>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onKeyPress={(e) => this.keyPressed(e)} onChange={ev => this.setState({ message: ev.target.value })} />
                                <br />
                                <button onClick={this.sendMessage} className="start-button-two">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
