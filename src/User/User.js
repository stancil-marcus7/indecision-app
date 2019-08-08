import React from 'react';
import { tsPropertySignature } from '@babel/types';

// Example of Stateless Functional Component
//You do need props as a parameter
const User = (props) => {
    //We don't need the render function
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default User;