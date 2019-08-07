import React from 'react';

class AddOption extends React.Component{
    handleAddOption(e){
        //Prevents the page from refreshing
        e.preventDefault();
        
        //THis works because the input has the name of "option"
        const option = e.target.elements.option.value.trim();

        if(option){
            alert(option);
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;