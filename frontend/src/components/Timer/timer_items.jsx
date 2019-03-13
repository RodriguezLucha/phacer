import React from 'react';



class TimerItems extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div>
                <h1 id="title">
                   {this.props.timer.endTime}
                </h1>
            </div>
        )
    }

}

export default TimerItems;