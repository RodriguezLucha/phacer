import React from 'react';
import '../rooms/rooms.scss'



class TimerItems extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <>
                <td id='td'>
                    {this.props.timer.handle}
                </td >
            <td id='td'>
                   {this.props.timer.endTime}
            </td >
            </>
        )
    }

}

export default TimerItems;