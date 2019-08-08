import React from  'react'
import Option from './Option/Option'

const Options = (props) => {
    // Maps the options to the Option component
    const options = props.options.map(option => {
        return <Option key={option} message={option}/>;
    })

    return(
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {options}
        </div>
    )
}

export default Options;