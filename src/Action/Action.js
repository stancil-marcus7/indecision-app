import React from 'react';

const Action = (props) => (
        <div>
            <button 
                className="big-button"
                onClick={props.pick}
                // The button will be disabled when their are no options
                disabled={!props.hasOptions}>What Shoud I Do?</button>
        </div>
    )


export default Action;