import React from 'react';

class Action extends React.Component{
    render(){
        return(
            <div>
                <button 
                    onClick={this.props.pick}
                    // The button will be disabled when their are no options
                    disabled={!this.props.hasOptions}>What shoud I do?</button>
            </div>
        )
    }
}

export default Action;