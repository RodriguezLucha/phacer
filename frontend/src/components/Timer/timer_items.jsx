import React from 'react';
import '../rooms/rooms.scss'



class TimerItems extends React.Component {
    render(){
        return (
            <>
                <td id='td-r'>
                    {this.props.timer.handle}
                </td >
            <td id='td-r'>
                   {this.props.timer.endTime}
            </td >
            </>
        )
    }
}

export default TimerItems;