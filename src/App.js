//import logo from './logo.svg';
//import './App.css';
//import { ClassComp1 } from './Components/ClassComp';
import FunctionalComp from './Components/FunctionalComp';
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';


function App() {
  return (
    <div>
      <h1> Hello ! I am Anish </h1>
      <h1> I am from Chakdaha </h1>
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;
