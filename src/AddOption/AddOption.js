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
    
        //If their is an error the error will set to what the local error is
        this.setState(()  => ({error}))
        
        e.target.elements.option.value = '';
    }

    render(){
        return (
            <div>
                {this.state.error ? <p className="add-option-error">{this.state.error}</p> : null}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;