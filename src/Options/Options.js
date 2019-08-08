import React from  'react'
import Option from './Option/Option'

const Options = (props) => {
    return(

        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {/* Maps the options to the Option component */}
            {/* If the length of the options is 0, then "Please enter some options" will render */}
            {props.options.length === 0 ? <p>Please enter some options</p> : props.options.map(option => (
                <Option 
                key={option} 
                text={option} 
                deleteOption={props.deleteOption}/>
            ))
            }
            
        </div>
    )
}

export default Options;