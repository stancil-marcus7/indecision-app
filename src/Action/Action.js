import React from 'react';

const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.pick}
                // The button will be disabled when their are no options
                disabled={!props.hasOptions}>What shoud I do?</button>
        </div>
    )
    
}

export default Action;