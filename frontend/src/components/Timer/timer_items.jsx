import React from 'react';



class TimerItems extends React.Component {
    render(){
        return (
            <div className="score_row">
                <h1 id="name">
                    {this.props.timer.handle}
                </h1>
                <h1 id="title">
                   {this.props.timer.endTime}
                </h1>

            </div>
        )
    }
}

export default TimerItems;