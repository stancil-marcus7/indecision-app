import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Normalized the css settings in all settings
import 'normalize.css/normalize.css'

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {/* This is how we can show template within the layout */}
//             {props.children}
//             <p>footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
