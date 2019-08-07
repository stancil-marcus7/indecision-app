import React from 'react';
import './App.css';
import Header from './Header/Header'
import Action from './Action/Action'
import Options from './Options/Options'
import AddOption from './AddOption/AddOption'

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
  }

  state = {
    options: ['Thing 1', 'Thing 2', 'Thing 3']

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

  render(){
    const title = "Indecision"
    const subTitle = "Put your life in the hands of a computer"
    
    return (
      <div className="App">
        <Header title={title} subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length > 0} pick={this.handlePick}/>
        <Options options={this.state.options} deleteOptions={this.handleDeleteOptions}/>
        <AddOption/>
      </div>
    );
  }
}

export default App;
