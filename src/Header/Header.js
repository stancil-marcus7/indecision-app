import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {/* If a subTitle is in props, there will be one; if not there will be */}
            {props.subTitle ? <h2>{props.subTitle}</h2>: null}
        </div>
    )
}

// This is the default title for the application when no title is passed in as a prop
Header.defaultProps = {
    title: 'Indecision'
}

export default Header