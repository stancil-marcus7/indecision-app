import React from 'react';

const Option = (props) => {
    return (
        //Gets message from Option component
        <div>{props.text}
        {/* Sending the option text to the handleDeleteOption function in App.js */}
        <button 
            className="button button--link"
            onClick={(e) => {
            props.deleteOption(props.text)
        }}>
            -
        </button></div>
    )
}

export default Option;