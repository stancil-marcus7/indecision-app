import React from 'react';
import './App.css';
import Header from './Header/Header'
import Action from './Action/Action'
import Options from './Options/Options'
import AddOption from './AddOption/AddOption'
import User from './User/User'

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    }
  
  state = {
    options: []

  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum]);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return{
        options: []
      }
    })
  }

  handleAddOption(option){
    if (!option){
      return 'Enter valid value to item'
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    } 

    this.setState(() => {
      return{
        options: [...this.state.options, option]
        //Could also do options: prevState.options.concat(options);
      }
    })
    
  }

  render(){
    const title = "Indecision"
    const subTitle = "Put your life in the hands of a computer"
    
    return (
      <div className="App">
        <Header title={title} subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length > 0} pick={this.handlePick}/>
        <Options options={this.state.options} deleteOptions={this.handleDeleteOptions}/>
        <AddOption addOption={this.handleAddOption}/>
        {/* Just an example of a stateless functional component */}
        {/* <User name="Marcus"
              age="23"/>*/}
      </div> 
    );
  }
}

export default App;
