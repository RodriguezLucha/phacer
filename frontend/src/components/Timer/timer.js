import React from 'react';
import prettyMs from 'pretty-ms';
import SinglePlayerContainer from '../single_player/single_player_container';
import './timer.scss';
import ScoreContainer from '../Timer/scores_container';

class Timer extends React.Component {
    constructor(props){
     
        super(props)

        this.state = {
          time: 0,
          start: 0,
          end: 0,
          isOn: false
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer() {
        this.setState({
          time: this.state.time,
          start: Date.now() - this.state.time ,
          isOn: true
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }),1)
        console.log("start")
    }

    stopTimer() {
      if (this.stop) return ;
      this.stop = true;
      this.setState({isOn: false})
      this.setState({endTime: prettyMs(this.state.time)})
      this.props.recordTimer(this.state) 
      // console.log(this.state.end)
      clearInterval(this.timer)
      console.log("stop")

    }

    resetTimer() {
      this.setState({time: 0})
      console.log("reset")
    }

    componentDidMount() {
      this.startTimer()
    }

   
      
    render() {
      let start = (this.state.time == 0) ?
        <button onClick={() => this.startTimer()}>Start</button>: null

      let stop = (this.state.isOn) ?
        <button onClick={this.stopTimer}>Stop</button>: null

      let reset = (this.state.time != 0 && !this.state.isOn) ?
        <button onClick={this.resetTimer}>Reset</button>: null
      
      let resume = (this.state.time != 0 && !this.state.isOn) ?
        <button onClick={this.startTimer}>resume</button>: null

      return (
        <div>
          <h3>timer: {prettyMs(this.state.time)}</h3>
          <SinglePlayerContainer stopTimer={this.stopTimer} startTimer={this.startTimer} end={this.state.end} recordTimer={this.props.recordTimer} fetchTimers ={this.props.fetchTimers}/>
          {/* <ScoreContainer end={this.state.end}/> */}
        </div>
      );
    }
}

export default Timer;