import React from 'react';
import prettyMs from 'pretty-ms';
import SinglePlayerContainer from '../single_player/single_player_container';
import './timer.scss';

class Timer extends React.Component {
    constructor(props){
     
        super(props)

        this.state = {
          time: 0,
          start: 0,
          end: 0,
          intTime: 0,
          isOn: false,
          handle: this.props.users.handle
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer() {
        this.setState({
          time: this.state.time,
          start: Date.now() - this.state.time ,
          isOn: true,
          handle: this.props.users.handle
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }),1)
    }

    stopTimer() {
      if (this.stop) return ;
      this.stop = true;
      this.setState({isOn: false})
      this.setState({endTime: prettyMs(this.state.time)})
      this.setState({intTime: (this.state.time)})
      this.props.recordTimer(this.state) 
      clearInterval(this.timer)

    }

    resetTimer() {
      this.setState({time: 0})
    }

    componentDidMount() {
      this.startTimer()
    }

   
      
    render() {
      return (
        <div>
          <h3>timer: {prettyMs(this.state.time)}</h3>
          <SinglePlayerContainer stopTimer={this.stopTimer} startTimer={this.startTimer} end={this.state.end} recordTimer={this.props.recordTimer} fetchTimers ={this.props.fetchTimers}/>
        </div>
      );
    }
}

export default Timer;