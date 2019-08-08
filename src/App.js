import React from 'react';
import './App.css';
import Header from './Header/Header'
import Action from './Action/Action'
import Options from './Options/Options'
import AddOption from './AddOption/AddOption'
// import User from './User/User'

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
  
    //Using default state
  state = {
    options: this.props.options
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum]);
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));


    // const num = () => {} will return a function body
    // const num = () => ({}) will return a function body
  }

  handleDeleteOption(optionToDelete){
    this.setState(prevState => ({
      //If the option witin the options don't match the optionToDelete, they will remain in the array
      options: prevState.options.filter(option => optionToDelete !== option)
    }))
  }

  handleAddOption(option){
    if (!option){
      return 'Enter valid value to item'
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    } 

    this.setState(() => ({options: [...this.state.options, option]
        //Could also do options: prevState.options.concat(options);
      }))
    
  }

  render(){
    const subTitle = "Put your life in the hands of a computer"
    
    return (
      <div className="App">
        <Header subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length > 0} pick={this.handlePick}/>
        <Options options={this.state.options} deleteOptions={this.handleDeleteOptions} deleteOption={this.handleDeleteOption}/>
        <AddOption addOption={this.handleAddOption}/>
        {/* Just an example of a stateless functional component */}
        {/* <User name="Marcus"
              age="23"/>*/}
      </div> 
    );
  }
}

App.defaultProps = {
  options: []
}

export default App;
