import React from 'react';

const Option = (props) => {
    return (
        //Gets message from Option component
        <div className="option">
            <p className="option__text">{props.count}. {props.text}
            </p>
        {/* Sending the option text to the handleDeleteOption function in App.js */}
        <button 
            className="button button--link"
            onClick={(e) => {
            props.deleteOption(props.text)
        }}>
            Remove
        </button></div>
    )
}

export default Option;