import React from 'react';

class Option extends React.Component{
    render(){
        return (
            //Gets message from Option component
            <div>{this.props.message}</div>
        )
    }
}

export default Option;