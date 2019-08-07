import React from  'react'
import Option from './Option/Option'

const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}

const getName = obj.getName.bind(obj);

console.log(getName());

class Options extends React.Component{
    //We're going to override the constructor
    constructor(props){
        super(props);
        //This will make sure handleRemoveAll will always have the correct context
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    //This method loses all context  when itis called(props will show up null if bind(this) isnt attached to its calls)
    handleRemoveAll() {
        console.log(this.props.options)
    }

    render(){
        // Maps the options to the Option component
        const options = this.props.options.map(option => {
            return <Option key={option} message={option}/>;
        })

        return(
            <div>
                <button onClick={this.props.deleteOptions}>Remove All</button>
                {options}
            </div>
        )
    }
}

export default Options;