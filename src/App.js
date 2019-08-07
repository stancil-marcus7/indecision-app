import React from 'react';
import './App.css';
import Header from './Header/Header'
import Action from './Action/Action'
import Options from './Options/Options'
import AddOption from './AddOption/AddOption'

function App() {
  const title = "Indecision"
  const subTitle = "Put your life in the hands of a computer"
  const options = ['Thing 1', 'Thing 2', 'Thing 3']
  return (
    <div className="App">
      <Header title={title} subTitle={subTitle}/>
      <Action/>
      <Options options={options}/>
      <AddOption/>
    </div>
  );
}

export default App;
