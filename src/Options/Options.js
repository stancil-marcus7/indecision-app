import React from  'react'
import Option from './Option/Option'

const Options = (props) => (

    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                //button--link is overriding some select styles in button
                className="button button--link"
                onClick={props.deleteOptions}>
                Remove All
            </button>
        </div>
        {/* Maps the options to the Option component */}
        {/* If the length of the options is 0, then "Please enter some options" will render */}
        {props.options.length === 0 && <p className="message">Please enter some options</p>} 
        {props.options.map((option, index) => (
            <Option 
            key={option} 
            text={option} 
            count={index + 1}
            deleteOption={props.deleteOption}/>
        ))
        }
        
    </div>
)

export default Options;