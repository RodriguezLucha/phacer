import React from 'react';
import './timer.scss';


class Score extends React.Component {
    constructor(props){
        // debugger
        super(props)
    }


    render(){
        return (
            <div>
                <h1 id="title">
                   end: {this.props.end}
                </h1>
            </div>
        )
    }

}

export default Score;