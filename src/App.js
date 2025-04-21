import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewComp from './Components/NewComp';

class App extends React.Component {
  styles = {
    fontStyle : "bold",
    color : "blue"
  };

  render(){
    return (
      <div className='App'>
        <h1 style={this.styles}> Welcome </h1>
        <NewComp />
      </div>
    );
  }
}

export default App;
