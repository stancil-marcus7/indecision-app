import React from 'react';
import './styles/styles.scss';
import Header from './Header/Header'
import Action from './Action/Action'
import Options from './Options/Options'
import AddOption from './AddOption/AddOption'
import OptionModal from './OptionModal/OptionModal'
// import User from './User/User'

export default class App extends React.Component {
  
  state = {
    options: [],
    selectedOption: undefined
  }
  //Fires when the component did mount on the dom
  componentDidMount() {

    //Want to use a try catch just incase their are any errors in the JSON
    try {
    //Obtaining the data from local storage
    const json = localStorage.getItem('options');
    //Parsing the data into an array
    const options = JSON.parse(json);
    //If options are null they will be set to the default state (an empty array) instead of null
    if (options){
      //Resetting the state
      this.setState(() => ({options: options}))
    }
    } catch (e) {
      //We're not doing to do anything if there is an error
    }
    
  }

  //Will fire when the component updates (When we add and erase options)
  componentDidUpdate(prevProps, prevState){
    //If thre previous this.state.options array length isn't the same length as the current one, then we will save they new data
    if (prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
    
  }

  //Will fire when a component goes away
  componentWillUnmount(){
    console.log('[componentWillUnmount]')
  }

  handlePick = () =>{
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    // alert(this.state.options[randomNum]);
    //I know this is confusing; it will just make sure selctedOption has a value; truthy value is determined later
    this.setState(() => ({selectedOption: this.state.options[randomNum]}))
  }

  handleCloseModal = () => {
    this.setState(() => ({selectedOption: undefined}))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));


    // const num = () => {} will return a function body
    // const num = () => ({}) will return a function body
  }

  handleDeleteOption = (optionToDelete) => {
    this.setState(prevState => ({
      //If the option witin the options don't match the optionToDelete, they will remain in the array
      options: prevState.options.filter(option => optionToDelete !== option)
    }))
  }

  handleAddOption = (option) => {
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
      <OptionModal 
        selectedOption={this.state.selectedOption}
        closeModal={this.handleCloseModal}/>
      </div> 
    );
  }
}

