import React from 'react';

class Action extends React.Component{
    //Will send an alert when button is clicked
    handlePick(){
        alert('handlePick');
      }

    render(){
        return(
            <div>
                <button onClick={this.handlePick}>What shoud I do?</button>
            </div>
        )
    }
}

export default Action;