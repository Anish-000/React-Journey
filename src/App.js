import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps';

class App extends React.Component {
  render(){
    return (
      <div>
        <ClassProps name = " Anish " place = " Chakdaha "><p>Child Comp</p></ClassProps>
        <ClassProps name = "Shrestha" place = " Kalyani "><button> Click Me </button></ClassProps>
        <ClassProps name = "Ani" place = " Chakdaha "/>
        <FunctionProps name = "ABCD" place = " Kolkata "/>
      </div>
    );
  }
}

export default App;
