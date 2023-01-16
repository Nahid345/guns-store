import { useState } from 'react';
import './App.css';
import Allgun from './components/Allgun/Allgun';
import Navbar from './components/Navbar/Navbar';

function App() {
 const[count,setCount] = useState(0);

 const countIncrease = ()=>{
  setCount(count+1)
 }

  return (
    <div className="App">
    <Navbar count = {count}></Navbar>
    <Allgun countIncrease ={countIncrease} ></Allgun>
    </div>
  );
}

export default App;
