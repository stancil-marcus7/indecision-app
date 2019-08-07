import React from  'react'
import Option from './Option/Option'

class Options extends React.Component{
    handleRemoveAll() {
        alert('You just deleted something');
    }

    render(){
        // Maps the options to the Option component
        const options = this.props.options.map(option => {
            return <Option key={option} message={option}/>;
        })

        return(
            <div>
                {options}
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}

export default Options;