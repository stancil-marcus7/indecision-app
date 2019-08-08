import React from 'react';

class AddOption extends React.Component{
    constructor(props){
        super(props)

        this.handleAddOption = this.handleAddOption.bind(this);
    }

    state = {
        error: undefined
    }

    handleAddOption(e){
        //Prevents the page from refreshing
        e.preventDefault();
        
        //THis works because the input has the name of "option"
        const option = e.target.elements.option.value.trim();
        
        //When an option is added it will be sent to handleAddOption in App.js to get added to the option array
        const error = this.props.addOption(option)
        
        this.setState(()  => ({error: error}))

        e.target.elements.option.value = '';
    }

    render(){
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;